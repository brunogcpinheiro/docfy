const { Project } = require('../models');

module.exports = {
  async create(req, res, next) {
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
};
