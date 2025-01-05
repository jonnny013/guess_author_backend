import { Model, DataTypes } from 'sequelize'

class Game extends Model {}

Game.init(
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
  {
    sequelize,
    underscored: false,
    modelName: 'games',
  }
)
export default Game
