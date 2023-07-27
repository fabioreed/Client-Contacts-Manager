import { ToastContainer } from "react-toastify"
import { MyRoutes } from "./routes"
import GlobalStyle from "./styles/globalStyles"
import Reset from "./styles/reset"

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <MyRoutes />
      <ToastContainer
        position="top-center"
        autoClose={950}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
