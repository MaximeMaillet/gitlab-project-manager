
async function create(req, res) {
  try {
    await req.services.gitlab.hooks.create({
      id: req.body.project_id,
      url: 'https://gitlab.deuxmax.fr/api/repositories/fe3239SKso',
      push_events: true,
      merge_requests_events: true,
      tag_push_events: true,
      issues_events: false,
    });

    res.send();
  } catch(e) {
    res.status(500).send(e);
  }
}

module.exports = {
  create,
};