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
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'sessions', key: 'id' },
      onDelete: 'CASCADE',
    },
    answerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'answers', key: 'id' },
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'games',
    timestamps: false,
  }
)
export default Game
