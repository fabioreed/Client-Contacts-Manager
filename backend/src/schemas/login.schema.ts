import { z } from "zod"

const TLoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export { TLoginRequestSchema }