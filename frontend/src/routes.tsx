import { Route, Routes } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"
import { UserProvider } from "./providers/UserContext"
import { DashProvider } from "./providers/DashContext"
import ProtectedRoutes from "./components/ProtectedRoutes"

export const MyRoutes = () => {

  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Login />} />
        
        <Route path='/dashboard' element={<ProtectedRoutes />}>
          <Route index element={
            <DashProvider>
              <Dashboard />
            </DashProvider>
            }
          />
        </Route>
      </Routes>
    </UserProvider>
  )
}