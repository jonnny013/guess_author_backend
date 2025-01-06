import { z } from 'zod'
import getErrName from './parsingError.js'

export const SessionsParser = z.object({
  theme: z.string(getErrName('theme')),
})
