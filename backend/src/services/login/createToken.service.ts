import { compare } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entitie"
import { AppError } from "../../errors/AppError"
import { TLoginRequest } from "../../interfaces/login.interface"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { Repository } from "typeorm"

const createTokenService = async ({ email, password }: TLoginRequest): Promise<string> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

  const client: Client | null = await clientRepository.findOne({
    where: { email }
  })

  if (!client) throw new AppError('Invalid credentials', 403)
  
  const comparePassword = await compare(password, client.password)

  if (!comparePassword) throw new AppError('Invalid credentials', 403)
  
  const token = jwt.sign(
    {
      clientName: client.name
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: '1d',
      subject: client.id
    }
  )

  return token
}

export { createTokenService }