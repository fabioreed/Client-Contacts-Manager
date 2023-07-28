import 'reflect-metadata'
import 'express-async-errors'
import express, { Application } from 'express'
import { handleAppError } from './middlewares/handleAppError.middleware'
import { sessionRoutes } from './routes/session.routes'
import { clientRoutes } from './routes/clients.routes'
import { contactRoutes } from './routes/contacts.routes'
import cors from 'cors'

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/clients', clientRoutes)
app.use('/login', sessionRoutes)
app.use('/contacts', contactRoutes)

app.use(handleAppError)

export default app