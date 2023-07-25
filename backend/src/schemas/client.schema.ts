import { z } from 'zod'
import { phoneRegex } from './contact.schema'

const clientSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  number: z.string().regex(phoneRegex, 'Invalid phone number!').nullish(),
  password: z.string(),
  createdAt: z.string().optional()
})

const clientSchemaRequest = clientSchema.omit({
  id: true
})

const clientSchemaResponse = clientSchema.omit({
  password: true
})

const AllClientsResponseSchema = clientSchemaResponse.array()

export { clientSchema, clientSchemaResponse, clientSchemaRequest, AllClientsResponseSchema }