import { hash } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entitie"
import { AppError } from "../../errors/AppError"
import { AllClientsResponseSchema, clientSchemaResponse } from "../../schemas/client.schema"
import { TAllClients, TClientRequest, TClientResponse } from "../../interfaces/users.interfaces"
import { Repository } from "typeorm"

const createClientService = async (data: TClientRequest): Promise<TClientResponse> => {
    const { email, name, password, number } = data
    const clientRepository = AppDataSource.getRepository(Client)
    const findClient = await clientRepository.findOne({
      where: { email }
    })

    if (findClient) throw new AppError('Client already exists!', 409)
    
    const hashedPassword = await hash(password, 8)
    const client = clientRepository.create({
      name, email, number, password: hashedPassword
    })

    await clientRepository.save(client)

    return clientSchemaResponse.parse(client)
}

const getAllUsersService = async (): Promise<TAllClients> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
  const getClients: Array<Client> = await clientRepository.find()
  const clients = AllClientsResponseSchema.parse(getClients)

  return clients
}

// export const getUserByIdService = async (clientId: string): Promise<TClientRequest> => {
//   const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
//   const getClient: Client = await clientRepository.findOne({ where: { id: clientId } })
  
//   if (!getClient) throw new AppError('User not found', 404)
  
//   return getClient
// }

const updateClientService = async (clientData: any, id: string): Promise<TClientResponse> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
  const oldClientData = await clientRepository.findOne({ where: { id: id }})

  const newClientData = clientRepository.create({
    ...oldClientData,
    ...clientData
  })

  await clientRepository.save(newClientData)
  const updatedClient = clientSchemaResponse.parse(newClientData)

  return updatedClient
}

const deleteClientService = async (id: string): Promise<void> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
  const client = await clientRepository.findOneBy({ id: id })

  await clientRepository.remove(client!)
}

export { createClientService, getAllUsersService, updateClientService, deleteClientService }