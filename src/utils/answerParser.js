import { z } from 'zod'
import getErrName from './parsingError.js'

export const AnswersParser = z.object({
  name: z.string(getErrName('name')),
  sessionId: z.number(getErrName('session')),
  answer: z.string(getErrName('answer')),
})
