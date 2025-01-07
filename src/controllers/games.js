import express from 'express'
import { GamesParser } from '../utils/gamesParser.js'
import { Answer, Game } from '../models/index.js'
import { sequelize } from '../db/db.js'

const gamesRouter = express.Router()

gamesRouter.post('/', async (req, res) => {
  try {
    const parsedData = GamesParser.parse(req.body)
    const game = await Game.create(parsedData)
    res.status(201).json(game.id)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

gamesRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const list = await Game.findAll({
      where: { sessionId: id },
      include: [
        {
          model: Answer,
          attributes: [],
        },
      ],
      attributes: [
        'id',
        'isCorrect',
        'name',
        [sequelize.col('answer.answer'), 'guessedAnswer'],
        [sequelize.col('answer.name'), 'guessedName'],
      ],
    })
    console.log(list)
    res.status(201).json(list)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

export default gamesRouter
