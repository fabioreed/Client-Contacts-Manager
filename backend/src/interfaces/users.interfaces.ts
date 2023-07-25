import { z } from 'zod'
import { AllClientsResponseSchema, clientSchema, clientSchemaRequest, clientSchemaResponse } from '../schemas/client.schema'

type TClient = z.infer<typeof clientSchema>

type TClientRequest = z.infer<typeof clientSchemaRequest>

type TClientResponse = z.infer<typeof clientSchemaResponse>

type TAllClients = z.infer<typeof AllClientsResponseSchema>

export { TClient, TClientRequest, TClientResponse, TAllClients }