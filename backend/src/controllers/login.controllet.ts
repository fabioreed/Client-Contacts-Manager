import { Request, Response } from "express"
import { createTokenService } from "../services/login/createToken.service"
import { TLoginRequest } from "../interfaces/login.interface"

const createTokenController = async (req: Request, res: Response): Promise<Response> => {
  const { email, password }: TLoginRequest = req.body
  // const loginData: TLoginRequest = req.body

  const token = await createTokenService({ email, password })
  // const token = await createTokenService(loginData)

  return res.json(token)
}

export { createTokenController }