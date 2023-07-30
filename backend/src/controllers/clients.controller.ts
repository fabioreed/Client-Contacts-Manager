import { Request, Response } from "express"
import { createClientService, deleteClientService, getAllUsersService, retrieveClientService, updateClientService } from "../services/client/createClient.service"
import { TClientResponse } from "../interfaces/users.interfaces"

const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const newClient = await createClientService(req.body)

    return res.status(201).json(newClient)
}

const getAllClientsController = async (req: Request, res: Response): Promise<Response> => {
    const clients = await getAllUsersService()
    return res.status(200).json(clients)
}

const retrieveClientController = async (req: Request, res: Response): Promise<Response> => {
    const clientId: string = req.params.id
    const client: TClientResponse = await retrieveClientService(clientId)
    return res.json(client)
}

const updateClientController = async (req: Request, res: Response): Promise<Response> => {
    const clientData = req.body
    const { id } = req.params
    const newClientData = await updateClientService(clientData, id)

    return res.status(200).json(newClientData)
}

const deleteClientController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params

    await deleteClientService(id)
    return res.status(204).send()
}

export { createClientController, getAllClientsController, updateClientController, deleteClientController, retrieveClientController }