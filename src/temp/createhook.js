client.hooks.create({
  id: 28,
  url: 'https://deuxmax.fr',
  push_events: true,
  merge_requests_events: true,
  tag_push_events: true,
  issues_events: false,
})
.then(function (milestones) {
  console.log(milestones);
  // for(let i = 0; i<milestones.length; i++) {
  //   console.log(`${milestones[i].id} (${milestones[i].milestone ? milestones[i].milestone.id : null}) : ${milestones[i].title} : ${milestones[i].web_url}`);
  //   console.log(milestones[i].author);
  //   console.log(milestones[i]);
  // }
})
.catch(function (err) {
  throw err;
});