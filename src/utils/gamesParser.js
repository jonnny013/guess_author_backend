import { z } from 'zod'
import getErrName from './parsingError.js'

export const GamesParser = z.object({
  name: z.string(getErrName('name')),
  sessionId: z.number(getErrName('session')),
  answerId: z.number(getErrName('answer')),
  isCorrect: z.boolean(getErrName('isCorrect')),
  chosenName: z.string(getErrName('chosen Name')),
})
