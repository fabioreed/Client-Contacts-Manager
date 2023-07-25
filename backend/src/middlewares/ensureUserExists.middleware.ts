import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Client } from "../entities/client.entitie"
import { AppError } from "../errors/AppError"
import { NextFunction, Request, Response } from "express"

const ensureUserExistsMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const { id } = req.params
  const userRepository: Repository<Client> = AppDataSource.getRepository(Client)
  const client: Client | null = await userRepository.findOneBy({ id: id })

  if (!client) throw new AppError('User not found', 404)
  
  return next()
}

export { ensureUserExistsMiddleware }