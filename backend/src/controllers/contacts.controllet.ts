import { Request, Response } from "express"

const createContactController = async (req: Request, res: Response) => {
    const newContact = await createContactService(req.body)

    return res.status(201).json(newContact)
}

export { createContactController  }