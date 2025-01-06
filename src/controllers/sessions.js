import express from 'express'
import { SessionsParser } from '../utils/sessionsParser.js'
import { Session } from '../models/index.js'

const sessionsRouter = express.Router()

sessionsRouter.post('/', async (req, res) => {
  try {
    const parsedData = SessionsParser.parse(req.body)
    const newItem = await Session.create(parsedData)
    res.status(201).json({ id: newItem.id })
  } catch (err) {
    res.status(400).json(err)
  }
})

sessionsRouter.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const newItem = await Session.findByPk(id)
    res.status(201).json(newItem)
  } catch (err) {
    res.status(400).json(err)
  }
})

export default sessionsRouter
