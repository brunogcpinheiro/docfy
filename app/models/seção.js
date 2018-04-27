module.exports = (sequelize, DataTypes) => {
  const Seção = sequelize.define('Seção', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  });

  Seção.associate = (models) => {
    Seção.belongsTo(models.Projeto);
  };

  return Seção;
};
