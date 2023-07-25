import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import 'dotenv/config'
import { AppError } from "../errors/AppError"

export const ensureTokenIsValid = (req: Request, res: Response, next: NextFunction): Response | void => {
  let token = req.headers.authorization

  if (!token) throw new AppError('Missing bearer token', 401)

  token = token.split(' ')[1]

  jwt.verify(token, process.env.SECRET_KEY!, (err: any, decoded: any) => {
    if (err) throw new AppError(err.message, 401)

    res.locals.token = {
      id: decoded.sub,
      admin: decoded?.admin
    }
  })
  
  return next()
}