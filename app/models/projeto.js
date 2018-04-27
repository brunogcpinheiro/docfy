module.exports = (sequelize, DataTypes) => {
  const Projeto = sequelize.define('Projeto', {
    title: DataTypes.STRING,
  });

  Projeto.associate = (models) => {
    Projeto.belongsTo(models.User);
    Projeto.hasMany(models.Seção);
  };

  return Projeto;
};
