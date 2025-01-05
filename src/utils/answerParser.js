import { z } from 'zod'
import getErrName from './parsingError'

export const Answers = z.object({
  name: z.string(getErrName('name')),
  session: z.string(getErrName('session')),
  answer: z.string(getErrName('answer')),
})
