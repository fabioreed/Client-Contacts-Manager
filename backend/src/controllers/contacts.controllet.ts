import { Request, Response } from "express"
import { createContactService, deleteContactService, listAllContactsService, updateContactService } from "../services/contact/createContact.service"

const createContactController = async (req: Request, res: Response) => {
    const clientId = res.locals.id
    const newContact = await createContactService(req.body, clientId)

    return res.status(201).json(newContact)
}

const listAllClientsController = async (req: Request, res: Response) => {
    const clientId = res.locals.id
    const contacts = await listAllContactsService(clientId)

    return res.json(contacts)
}

const updateContactController = async (req: Request, res: Response) => {
    const updateContact = await updateContactService(req.body, req.params.id)
    return res.json(updateContact)
}

const deleteContactController = async (req: Request, res: Response) => {
    await deleteContactService(req.params.id)
    res.status(204).send()
}

export { createContactController, listAllClientsController, updateContactController, deleteContactController }