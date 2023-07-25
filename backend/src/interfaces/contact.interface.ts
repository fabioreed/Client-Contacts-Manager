import { z } from "zod"
import { TContactSchema } from "../schemas/contact.schema"

type TContact = z.infer<typeof TContactSchema>

export { TContact }
