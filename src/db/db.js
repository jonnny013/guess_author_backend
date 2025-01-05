import { Sequelize } from 'sequelize'

const migrationsConfig = {
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'migrations',
}

const db_config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
    ...migrationsConfig,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    db_url: process.env.DATABASE_URL,
    ...migrationsConfig,
  },
}

const env = process.env.NODE_ENV || 'development'

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
