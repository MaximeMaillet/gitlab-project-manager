require('dotenv').config();
const gitlab = require('node-gitlab');

async function getClient() {
  return gitlab.createPromise({
    api: process.env.GITLAB_API,
    privateToken: process.env.ACCESS_TOKEN,
  });
}

module.exports = {
  getClient,
};