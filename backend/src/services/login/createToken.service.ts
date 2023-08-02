import { compare } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entitie"
import { AppError } from "../../errors/AppError"
import { TLoginRequest } from "../../interfaces/login.interface"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { Repository } from "typeorm"
import { clientSchemaResponse } from "../../schemas/client.schema"

interface TokenResponse {
  token: string
  userId: string // Assuming the user ID is of type number
  name: string
  phone: string | number | any
  email: string
  // Add other properties you want to include here
}

const createTokenService = async ({ email, password }: TLoginRequest): Promise<TLoginRequest | string | TokenResponse | any> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

  const client: Client | null = await clientRepository.findOne({
    where: { email }
  })

  if (!client) throw new AppError('Invalid credentials', 403)
  
  const comparePassword = await compare(password, client.password)

  if (!comparePassword) throw new AppError('Invalid credentials', 403)

  const clientReturn = clientSchemaResponse.parse(client)
  
  const token: string = jwt.sign(
    {
      clientName: client.name
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: '1d',
      subject: String(client.id)
    }
  )

  // const response = {
  //   token,
  //   id: client.id,
  //   email: client.email,
  //   name: client.name
  // }

  return { token, clientReturn }
}

export { createTokenService }