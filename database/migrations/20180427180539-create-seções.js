module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Seções', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ProjetoId: {
        type: DataTypes.INTEGER,
        references: { model: 'Projetos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Seções');
  },
};
