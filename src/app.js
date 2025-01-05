import express from 'express'
import cors from 'cors'

import sessionsRouter from './controllers/sessions'
import gamesRouter from './controllers/games'
import answersRouter from './controllers/answers'

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
