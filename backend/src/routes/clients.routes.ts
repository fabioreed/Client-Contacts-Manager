import { Router } from "express"
import { createClientController, deleteClientController, getAllClientsController, updateClientController } from "../controllers/clients.controller"
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware"
import { clientSchemaRequest, clientSchemaResponse } from "../schemas/client.schema"
import { ensureIsAdmMiddleware } from "../middlewares/ensureIsAdm.middleware"
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware"
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware"

const clientRoutes = Router()

clientRoutes.post('', ensureDataIsValid(clientSchemaRequest), createClientController)
clientRoutes.get('', getAllClientsController)
clientRoutes.patch('/:id', ensureUserExistsMiddleware, updateClientController)
clientRoutes.delete('/:id', ensureTokenIsValid, ensureUserExistsMiddleware, deleteClientController)

export { clientRoutes }