import { Repository } from 'typeorm';
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entitie"
import { AppError } from "../../errors/AppError"
import { TContact } from "../../interfaces/contact.interface"
import { TContactSchema, contactSchemaResponse } from "../../schemas/contact.schema"
import { Contact } from '../../entities/contact.entitie';

const createContactService = async (data: TContact, clientId: string): Promise<TContact> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

  const client = await clientRepository.findOne({ where: { id: clientId } })
  
  if (!client) throw new AppError('Client not found!', 404)

  const contact = contactRepository.create({
    ...data,
    client
  })

  await contactRepository.save(contact)

  return TContactSchema.parse(contact)
}

const listAllContactsService = async (clientId: string): Promise<TContact[]> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

  const client = await clientRepository.findOne({
    where: {
      id: clientId,
    }
  })

  if (!client) throw new AppError('Client not found', 404)

  const contacts = await contactRepository.find({
    where: {
      client: { id: client.id },
    },
  })

  if (contacts.length === 0) throw new AppError('No contacts', 404)

  return contacts
}

const updateContactService = async (data: TContact, contactId: string): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contact)
  const oldData = await contactRepository.findOneBy({ id: contactId })

  if (!oldData) throw new AppError('Contact not found', 404)
  
  const newContactData = contactRepository.create({
    ...oldData,
    ...data
  })

  await contactRepository.save(newContactData)

  return TContactSchema.parse(newContactData)
}

const deleteContactService = async (contactId: string): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact)
  const contact = await contactRepository.findOneBy({ id: contactId })

  if (!contact) throw new AppError('Contact not found.', 404)

  await contactRepository.remove(contact)
}

export { createContactService, listAllContactsService, updateContactService, deleteContactService }