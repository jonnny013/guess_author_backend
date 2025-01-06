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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: literal('CURRENT_TIMESTAMP'),
      field: 'created_at', 
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: literal('CURRENT_TIMESTAMP'),
      field: 'updated_at',
    },
  },
  {
    sequelize,
    modelName: 'sessions',
    timestamps: true,
  }
)
export default Session