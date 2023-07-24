import { z } from 'zod'
import { TLoginRequestSchema } from '../schemas/login.schema'

type TLoginRequest = z.infer<typeof TLoginRequestSchema>

export { TLoginRequest }