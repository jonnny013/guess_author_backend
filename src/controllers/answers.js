import express from 'express'
import { AnswersParser } from '../utils/answerParser.js'
import { Answer } from '../models/index.js'

const answersRouter = express.Router()

answersRouter.post('/', async (req, res) => {
  try {
    const parsedData = AnswersParser.parse(req.body)
    await Answer.create({ ...parsedData, session_id: parsedData.sessionId })
    res.status(201).json(parsedData)
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
})

answersRouter.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await Answer.findAndCountAll({ where: { sessionId: id } })
    res.status(200).json(results.count)
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
})

export default answersRouter
