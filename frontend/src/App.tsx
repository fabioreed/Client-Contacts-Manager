import { MyRoutes } from "./routes"
import GlobalStyle from "./styles/globalStyles"
import Reset from "./styles/reset"

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <MyRoutes />
    </>
  )
}

export default App
