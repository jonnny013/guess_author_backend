'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('answers', 'status', {
    type: Sequelize.TEXT,
    defaultValue: 'available',
  })
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('answers', 'status')
}
