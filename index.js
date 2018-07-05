require('dotenv').config();

const express = require('express');
const impRouter = require('express-imp-router');
const path = require('path');

const app = express();
impRouter(app);

impRouter.route({
  controllers: `${path.resolve('.')}/src/controllers`,
  middlewares: `${path.resolve('.')}/src/middlewares`,
  services: `${path.resolve('.')}/src/services`,
  routes: {
    '/api': {
      '/hook': {
          get: 'HookController#recipe'
        },
      '/repositories': {
        '_services': ['gitlabClient'],
        get: 'RepositoryController#getAll',
        '/:id': {
          get: 'RepositoryController#get',
        },
      }
    }
  }
});

app.listen(8282);

// Part one : Commit pushed
// A chaque commit : #idIssue $label déplacement de l'issue dans le board.
// Example : git commit -am "#22 $done"


// Part four : branch pushed
// Déploiement en preprod, issue dans review

// Part three : tag created
// Déploiement en prod, issues du milestones closes + commentaire (optional)

// Part two : Merge request accepted
// ?