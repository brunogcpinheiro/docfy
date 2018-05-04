const { Project, Section } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      await Project.create({
        ...req.body, UserId: req.session.user.id,
      });

      req.flash('success', 'Projeto criado com sucesso.');
      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const username = await req.session.user.name;
      const { id } = req.params;

      const sections = await Section.findAll({
        where: { ProjectId: req.params.id },
      });
      
      const project = await Project.findById(id);
  
      return res.render('projects/show', {
        username,
        sections,
        activeProject: req.params.id,
        project
      });
    } catch (err) {
      return next(err);
    }
  },
  
  async destroy(req, res, next) {
    try {
      await Project.destroy({ where: { id: req.params.id } });

      req.flash('success', 'Projeto removido com sucesso.');
      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }
  },
};
