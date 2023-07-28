import { Router } from "express"
import { createContactController, deleteContactController, listAllClientsController, updateContactController } from "../controllers/contacts.controllet"
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware"
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware"
import { ensureIsAdmMiddleware } from "../middlewares/ensureIsAdm.middleware"

const contactRoutes = Router()

contactRoutes.post('', createContactController)
contactRoutes.get('',  ensureTokenIsValid, listAllClientsController)
contactRoutes.patch('/:id', ensureTokenIsValid, updateContactController)
contactRoutes.delete('/:id', ensureTokenIsValid, deleteContactController)

export { contactRoutes }