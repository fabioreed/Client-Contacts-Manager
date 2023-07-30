export interface IUser {
  id: string
  name: string
  email: string
  number?: string | undefined
}

export interface IRegisterFormValues {
  name: string
  email: string
  password: string
  number: string
}