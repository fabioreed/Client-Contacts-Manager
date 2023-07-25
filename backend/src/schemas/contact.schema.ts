import { z } from "zod"

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

const TContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  number: z.string().regex(phoneRegex, 'Invalid Number!').nullish(),
  createdAt: z.string()
})

export { TContactSchema }