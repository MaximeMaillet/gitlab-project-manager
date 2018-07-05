

async function get(req, res) {

// client.projects.list({per_page: 50})
// .then(function (milestones) {
//   console.log(milestones.length);
//   for(let i =0; i<milestones.length; i++) {
//     console.log(`${milestones[i].id} :: ${milestones[i].web_url}`)
//   }
// })
// .catch(function (err) {
//   throw err;
// });

}

async function getAll(req, res) {
  const i = await req.services.gitlabClient.getClient();
  console.log(i);
}

module.exports = {
  get,
  getAll,
};