'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.createTable(
        'sessions',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          theme: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          created_at: {
            type: DataTypes.DATE,
            defaultValue: literal('CURRENT_TIMESTAMP'),
          },
          updated_at: {
            type: DataTypes.DATE,
            defaultValue: literal('CURRENT_TIMESTAMP'),
          },
        },
        { transaction }
      )
      await queryInterface.createTable(
        'answers',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          answer: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          session_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'sessions', key: 'id' },
            onDelete: 'CASCADE',
          },
        },
        { transaction }
      )
      await queryInterface.createTable(
        'games',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          is_correct: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
          },
          session_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'sessions', key: 'id' },
            onDelete: 'CASCADE',
          },
          answer_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: 'answers', key: 'id' },
            onDelete: 'CASCADE',
          },
        },
        { transaction }
      )
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}