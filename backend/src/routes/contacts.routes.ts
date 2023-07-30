import { Router } from "express"
import { createContactController, deleteContactController, listAllClientsController, updateContactController } from "../controllers/contacts.controllet"
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware"
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware"
import { ensureIsAdmMiddleware } from "../middlewares/ensureIsAdm.middleware"
import { contactSchemaResponse } from "../schemas/contact.schema"
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware"
import { clientSchema } from "../schemas/client.schema"

const contactRoutes = Router()

contactRoutes.post('', ensureTokenIsValid, createContactController)
contactRoutes.get('',  ensureTokenIsValid, listAllClientsController)
contactRoutes.patch('/:id', ensureTokenIsValid, updateContactController)
contactRoutes.delete('/:id', ensureTokenIsValid, deleteContactController)

export { contactRoutes }