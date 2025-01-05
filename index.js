import app from './src/app.js'
import { connectToDatabase } from './src/db/db.js'

const PORT = process.env.PORT || 3001

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}
void start()
