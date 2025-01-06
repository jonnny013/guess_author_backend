import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'
class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    session_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'sessions', key: 'id' },
      onDelete: 'CASCADE',
    },
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'answers', key: 'id' },
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    underscored: false,
    modelName: 'games',
    timestamps: false
  }
)
export default Game
