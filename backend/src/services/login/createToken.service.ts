import { compare } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { AppError } from "../../errors/AppError"
import { TLoginRequest } from "../../interfaces/login.interface"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { Repository } from "typeorm"

const createTokenService = async ({ email, password }: TLoginRequest): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const user: User | null = await userRepository.findOne({
    where: { email }
  })

  if (!user) throw new AppError('Invalid credentials', 403)
  
  const comparePassword = await compare(password, user.password)

  if (!comparePassword) throw new AppError('Invalid credentials', 403)
  
  const token = jwt.sign(
    {
      userName: user.name
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: '1d',
      subject: user.id
    }
  )

  return token
}

export { createTokenService }