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

  async show(req, res, next) {
    try {
      const { projectId, id } = req.params;
      const username = req.session.user.name;

      const section = await Section.findById(id);

      const sections = await Section.findAll({
        where: { ProjectId: projectId },
      });

      return res.render('projects/show', {
        activeProject: projectId,
        sections,
        currentSection: section,
        username,
      });
    } catch (err) {
      return next(err);
    }
  },
  async destroy(req, res, next) {
    try {
      await Section.destroy({ where: { id: req.params.id } });

      req.flash('success', 'Seção removido com sucesso.');
      return res.redirect(`/app/projects/${req.params.projectId}`);
    } catch (err) {
      return next(err);
    }
  },
};
