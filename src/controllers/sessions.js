import express from 'express'
import { Answers } from '../utils/answerParser.js'

const sessionsRouter = express.Router()

sessionsRouter.post('/', async (req, res) => {
  try {
    const parsedData = Answers.parse(req.body)
    //save to Database
    res.status(201).json(parsedData)
  } catch (err) {
    res.status(400).json(err)
  }
})

export default sessionsRouter