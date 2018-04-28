const { Section } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const { projectId } = req.params;
      await Section.create({ ...req.body, ProjectId: projectId });

      req.flash('success', 'Seção criada com sucesso.');

      return res.redirect(`/app/projects/${projectId}`);
    } catch (err) {
      return next(err);
    }
  },
};
