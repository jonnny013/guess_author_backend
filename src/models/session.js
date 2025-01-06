import { Model, DataTypes, literal } from 'sequelize'
import { sequelize } from '../db/db.js'
class Session extends Model{}

Session.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    theme: {
      type: DataTypes.TEXT,
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
  {
    sequelize,
    underscored: false,
    modelName: 'sessions',
  }
)
export default Session