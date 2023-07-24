import 'reflect-metadata'
import 'express-async-errors'
import express, { Application } from 'express'
import { userRoutes } from './routes/users.routes'
import { handleAppError } from './middlewares/handleAppError.middleware'
import { sessionRoutes } from './routes/session.routes'

const app: Application = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', sessionRoutes)

app.use(handleAppError)

export default app