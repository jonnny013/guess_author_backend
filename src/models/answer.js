import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'
class Answer extends Model {}

Answer.init(
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
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'sessions', key: 'id' },
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'answers',
    timestamps: false,
  }
)
export default Answer
