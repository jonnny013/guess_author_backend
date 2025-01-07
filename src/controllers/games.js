import express from 'express'
import { GamesParser } from '../utils/gamesParser.js'

const gamesRouter = express.Router()

gamesRouter.post('/', async (req, res) => {
  try {
    const parsedData = GamesParser.parse(req.body)
    //save to Database
    res.status(201).json(parsedData)
  } catch (err) {
    res.status(400).json(err)
  }
})

export default gamesRouter
