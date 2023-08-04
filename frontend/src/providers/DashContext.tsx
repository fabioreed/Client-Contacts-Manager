import { createContext, useContext, useEffect, useState } from "react"
import { IDefaultProviderProps, UserContext } from "./UserContext"
import { api } from "../services/api"
import { IUser } from "./@types"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export interface IClient {
  id: string
  name: string
  email: string
  number: string | number
  createdAt: string
}

interface IEditContact {
  id: string
  name: string
  email: string
  number: string
  createdAt: string
}

type IContext = {
  contact: IClient[]
  setContact: React.Dispatch<React.SetStateAction<IClient[]>>
  createContact: (data: IUser) => Promise<void>
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  editModal: boolean
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>
  removeContact: (id: string) => void
  editContact: (data: any, id: string) => Promise<void>
  editedContact: IEditContact | any
  setEditedContact: React.Dispatch<React.SetStateAction<boolean>> | any
  listAllContacts: boolean
  setListAllContacts: React.Dispatch<React.SetStateAction<boolean>>
  profileEditModal: boolean
  setProfileEditModal: React.Dispatch<React.SetStateAction<boolean>>
  selectedContact: any
  setSelectedContact: React.Dispatch<any>
  profile: IClient[]
  setProfile: React.Dispatch<React.SetStateAction<IClient[]>>
}

export const DashContext = createContext({} as IContext)

export const DashProvider = ({ children }: IDefaultProviderProps) => {
  const [contact, setContact] = useState<IClient[]>([])
  const [editedContact, setEditedContact] = useState<IClient | null | any>(null)
  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [listAllContacts, setListAllContacts] = useState(false)
  const [profileEditModal, setProfileEditModal] = useState(false)
  const [selectedContact, setSelectedContact] = useState<IClient | null | any>(null)
  const [profile, setProfile] = useState<IClient[]>([])
  const navigate = useNavigate()
  const { setLoading } = useContext(UserContext)

  useEffect(() => {
    const token = localStorage.getItem('@clientToken')
    if (token) {
      const getContacts = async () => {
        try {
          const res = await api.get('/contacts', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })

          setProfile(res.data)

          navigate('/dashboard')
        } catch (error) {
          console.log(error)

          navigate('/')
          localStorage.clear()
        }
      }
      getContacts()
    }
  }, [contact])

  const createContact = async (data: IUser) => {
    const token = localStorage.getItem('@clientToken')
    try {
      setLoading(true)
      const res = await api.post('/contacts', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const newContact = res.data

      toast.success('Contact added!')

      setContact([...contact, newContact])

    } catch (error) {
      console.log(error)

      toast.error('Contact not added!')
    } finally {
      setLoading(false)
    }
  }

  const removeContact = async (id: string) => {
    const token = localStorage.getItem('@clientToken')
    try {
      setLoading(true)
      await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const remove = contact.filter((item) => {
        return item.id !== id
      })

      setContact(remove)
      toast.success('Contact removed!')

    } catch (error) {
      console.log(error)

      toast.error('Contact cannot be removed!')
    } finally {
      setLoading(false)
    }
  }

  const editContact = async (data: any, id: string) => {
    const token = localStorage.getItem('@clientToken')
    try {
      setLoading(true)
        const res = await api.patch(`/contacts/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const newContact = contact.map(item => {
          if (id === item.id) {
            return {...item, ...data}
          } else {
            return item
          }
        })

        console.log(res)

        setContact(newContact)

        setSelectedContact(!selectedContact)

        const editedIndex = newContact.findIndex(item => item.id === id)

        if (editedIndex !== -1) setEditedContact(newContact[editedIndex]) 
        
        toast.success('Contact changed!')
      } catch (error) {
        console.log(error)

        toast.error('Something went wrong to update!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashContext.Provider value={{
      createContact, contact,
      setContact, modal,
      setModal, editModal,
      setEditModal, removeContact,
      editContact, editedContact,
      setEditedContact,
      listAllContacts, setListAllContacts,
      profileEditModal, setProfileEditModal,
      selectedContact, setSelectedContact,
      profile, setProfile
    }}>
      { children }
    </DashContext.Provider>
  )
}