import app from './src/app'
import { connectToDatabase } from './src/db/db'

const PORT = process.env.PORT || 3001

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}
void start()
