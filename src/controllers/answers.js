import express from 'express'
import { Answers } from '../utils/answerParser'

const answersRouter = express.Router()

answersRouter.post('/', async (req, res) => {
  try {
    const parsedData = Answers.parse(req.body)
    //save to Database
    res.status(201).json(parsedData)
  } catch (err) {
    res.status(400).json(err)
  }
})
