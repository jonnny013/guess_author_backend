import { Sequelize } from 'sequelize'

const env = process.env.NODE_ENV || 'development'
import  db_config  from '../config/db.cjs'

const config = db_config[env]

export const dbURL = env === 'production' ? config.db_url : config.url

export const sequelize = new Sequelize(dbURL)

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('connected to the database')
  } catch (err) {
    console.log('failed to connect to the database', err)
    process.exit(1)
  }
}
