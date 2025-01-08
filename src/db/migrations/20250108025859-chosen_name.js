'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.sequelize.transaction(async (transaction) => {
    await queryInterface.addColumn(
      'games',
      'chosen_name',
      {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'ABC',
      },
      { transaction }
    )
    await queryInterface.changeColumn(
      'games',
      'chosen_name',
      {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: undefined,
      },
      { transaction }
    )
  })
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('games', 'chosen_name')
}
