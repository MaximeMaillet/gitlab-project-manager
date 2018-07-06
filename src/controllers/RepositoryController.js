const projects = {
  'fe3239SKso': '104'
};

async function get(req, res) {
  const gitlab = await req.services.gitlab;
  const body = req.body;

  try {
    const regExpIssue = new RegExp(/^#([0-9]+)\s=>\s([a-zA-Z]+)/);
    for(let i=0; i<body.commits.length; i++) {
      const match = body.commits[i].message.match(regExpIssue);
      if(match) {
        await gitlab.moveIssue(parseInt(body.project_id), parseInt(match[1]), match[2]);
      }
    }
  } catch(e) {
    console.log(e);
  }
}

module.exports = {
  get,
};