const { Project } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      const username = await req.session.user.name;
      const projects = await Project.findAll({
        where: {
          UserId: req.session.user.id,
        },
      });

      return res.render('dashboard/index', { projects, username });
    } catch (err) {
      return next(err);
    }
  },
};
