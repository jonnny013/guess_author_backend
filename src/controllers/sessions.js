import express from 'express'
import { SessionsParser } from '../utils/sessionsParser.js'
import { Session } from '../models/index.js'

const sessionsRouter = express.Router()

sessionsRouter.post('/', async (req, res) => {
  try {
    const parsedData = SessionsParser.parse(req.body)
    const newItem = await Session.create(parsedData)
    res.status(201).json(newItem.id)
  } catch (err) {
    res.status(400).json(err)
  }
})

export default sessionsRouter
