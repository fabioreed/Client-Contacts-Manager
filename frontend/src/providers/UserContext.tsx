import { createContext, useEffect, useState } from "react"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { IRegisterFormValues, IUser } from "./@types"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"

export interface IUserContext {
  user: IUser | null
  userRegister: (formData: IRegisterFormValues) => Promise<void>
  userLogin: (formData: ILoginFormValues) => Promise<void>
  logout: () => void
  deleteUser: () => Promise<void>
  updateUser: (data: Partial<IUser>) => Promise<void>
}

export interface IDefaultProviderProps {
  children: React.ReactNode
}

export interface ILoginFormValues {
  email: string
  password: string
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => { 
    const token = localStorage.getItem('@clientToken')
    const id = localStorage.getItem('@clientId')

    if (token) {
      const getUser = async () => {
        try {
          const res = await api.get(`/clients/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })

          setUser(res.data)

          navigate('/dashboard')
        } catch (error) {
          console.log(error)
          setUser(null)
          localStorage.clear()
        }
      }
      getUser()
    }
  }, [])
  
  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      const res = await api.post('/clients', formData)

      setUser(res.data)

      toast.success('User registered!')

      navigate('/')

    } catch (error) {

      console.log(error)
      
      toast.error('Email already exists.')

    }
  }

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const res = await api.post('/login', formData)
      
      setUser(res.data)

      localStorage.setItem('@clientToken', res.data.token)

      localStorage.setItem('@clientId', res.data.id)

      toast.success('Logged in!')

      navigate('/dashboard')
      
    } catch (error) {
      console.log(error)

      toast.error('Something went wrong!')
    }
  }

  const logout = () => {
    setUser(null)

    localStorage.clear()

    navigate('/')
  }

  const deleteUser = async () => {
    const token = localStorage.getItem('@clientToken')
    const id = localStorage.getItem('@clientId')

    try {
      await api.delete(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUser(null)
      localStorage.clear()

      toast.success('Account deleted!')

      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error('Failed to delete account!')
    }
  }

  const updateUser = async (data: Partial<IUser>) => {
    const token = localStorage.getItem('@clientToken')
    const id = localStorage.getItem('@clientId')

    try {
      const res = await api.patch(`/clients/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUser(prevUser => ({
        ...prevUser,
        ...res.data
      }))

      toast.success('User updated!')
    } catch (error) {
      console.log(error)
      toast.error('Failed to update user!')
    }
  }

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, logout, deleteUser, updateUser }}>
      { children }
    </UserContext.Provider>
  )
}