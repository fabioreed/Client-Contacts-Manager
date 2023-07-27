import { createContext, useState } from "react"
import { IDefaultProviderProps } from "./UserContext"
import { api } from "../services/api"
import { IUser } from "./@types"

interface IClient {
  name: string
  email: string
  number: string
}

type IContext = {
  contact: {} | []
  setContact: React.Dispatch<React.SetStateAction<IClient[]>>
  createClient: (data: IUser) => Promise<void>
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  editModal: boolean
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>
  deleteModal: boolean
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const DashContext = createContext({} as IContext) // as AlgumaCoisa

export const DashProvider = ({ children }: IDefaultProviderProps) => {
  const [contact, setContact] = useState<IClient[]>([])
  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  const createClient = async (data: IUser) => {
    const token = localStorage.getItem('@clientToken')
    try {
      const res = await api.post('/clients', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const newClient = res.data
      // toast.sucess('huhuhuh')
      console.log('Client added!')

      setContact([...contact, newClient])
      //close modal
    } catch (error) {
      console.log(error)

      console.log('Client nao adicionado')
    }
    // fechar modal
  }

  return (
    <DashContext.Provider value={{ createClient, contact, setContact, modal, setModal, editModal, setEditModal, deleteModal, setDeleteModal }}>
      { children }
    </DashContext.Provider>
  )
}