import { createContext, useEffect, useState } from "react"
// import { toast } from 'react-toastify'
import { IRegisterFormValues, IUser } from "./@types"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"

export interface IUserContext {
  user: IUser | null
  userRegister: (formData: IRegisterFormValues) => Promise<void>
  userLogin: (formData: ILoginFormValues) => Promise<void>
  logout: () => void
}

export interface IDefaultProviderProps {
  children: React.ReactNode
}

export interface ILoginFormValues {
  email: string
  password: string
}

export const UserContext = createContext({} as IUserContext) // as IUserContext

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
          console.log(res.data)

          navigate('/dashboard')
        } catch (error) {
          console.log(error)
          setUser(null)
          // localStorage.clear()
        }
      }
      getUser()
    }
  }, [])
  
  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      const res = await api.post('/clients', formData)

      setUser(res.data)

      // toast.success('User registered!')

      navigate('/')
    } catch (error) {
      console.log(error)
      console.log('Cadastro falhou!')
      // toast.error('Email already exists.')
    }
  }

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const res = await api.post('/login', formData)

      setUser(res.data)

      localStorage.setItem('@clientToken', res.data.token)

      // toast.success('Logged in!')
      console.log(res.data.message)

      navigate('/dashboard')
      
    } catch (error) {
      console.log(error)
      console.log('Login falhou!')
      // toast.error('Something went wrong!')
    }
  }

  const logout = () => {
    setUser(null)

    localStorage.clear()

    navigate('/')
  }

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, logout }}>
      { children }
    </UserContext.Provider>
  )
}