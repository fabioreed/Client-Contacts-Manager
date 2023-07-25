import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

const ensureIsAdmMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const requestId = req.params.id
  const { admin, id } = res.locals.token

  if (!admin && requestId !== id) throw new AppError('Insufficient permission', 403)
  
  return next()
}

export { ensureIsAdmMiddleware }