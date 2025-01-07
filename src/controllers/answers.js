import express from 'express'
import { AnswersParser } from '../utils/answerParser.js'
import { Answer } from '../models/index.js'
import { sequelize } from '../db/db.js'

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

answersRouter.get('/count/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await Answer.count({ where: { sessionId: id } })
    res.status(200).json(results)
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
})

answersRouter.get('/random/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const names = await Answer.findAll({
      where: { sessionId: id },
      attributes: ['id', 'name'],
    })
    const transaction = await sequelize.transaction()
    const randomItem = await Answer.findOne({
      where: { status: 'available', sessionId: id },
      order: sequelize.literal('RANDOM()'),
      lock: transaction.LOCK.UPDATE,
      transaction,
    })
    if (!randomItem) {
      res.status(400).json('No items available')
      return
    }
    await randomItem.update({ status: 'chosen' }, { transaction })
    await transaction.commit()

    res.status(200).json({ names, question: randomItem })
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
})

answersRouter.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await Answer.findByPk(id)
    const names = await Answer.findAll({
      where: { sessionId: results.sessionId },
      attributes: ['id', 'name'],
    })
    res.status(200).json({ question: results, names })
  } catch (err) {
    console.error(err)
    res.status(400).json(err)
  }
})

export default answersRouter
