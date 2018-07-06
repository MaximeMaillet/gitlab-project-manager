require('dotenv').config();

const gitlab = require('node-gitlab');

async function getClient() {
  return gitlab.createPromise({
    api: process.env.GITLAB_API,
    privateToken: process.env.ACCESS_TOKEN,
  });
}

async function moveIssue(projectId, issueIid, target) {
  const client = await getClient();
  const issue = await getIssueFromIid(projectId, issueIid);

  await client.issues.update({
    id: projectId,
    issue_id: issue.id,
    labels: [target],
  });
}

async function getIssueFromIid(projectId, iid) {
  const list = await (await getClient()).issues.list({
    id: projectId
  });

  for (let i=0; i<list.length; i++) {
    if (list[i].iid === iid) {
      return list[i];
    }
  }

  throw new Error('Issue iid not found')
}

module.exports = {
  getClient,
  moveIssue,
};