import express from 'express'
import cors from 'cors'

import sessionsRouter from './controllers/sessions.js'
import gamesRouter from './controllers/games.js'
import answersRouter from './controllers/answers.js'

const app = express()

app.set('trust proxy', 1)
app.use(express.json())
app.use(
  cors({
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: true,
  })
)

app.use('api/v1/games', gamesRouter)
app.use('api/v1/answers', answersRouter)
app.use('api/v1/sessions', sessionsRouter)

export default app
