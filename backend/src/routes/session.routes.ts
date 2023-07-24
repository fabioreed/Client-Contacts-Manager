import { Router } from "express"
import { createTokenController } from "../controllers/login.controllet"

const sessionRoutes: Router = Router()

sessionRoutes.post('', createTokenController)

export { sessionRoutes }