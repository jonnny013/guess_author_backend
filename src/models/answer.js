import { Model, DataTypes } from 'sequelize'

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
    session_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'sessions', key: 'id' },
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    underscored: false,
    modelName: 'answers',
  }
)
export default Answer
