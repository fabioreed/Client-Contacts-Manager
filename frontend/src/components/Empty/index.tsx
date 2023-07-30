import Researching from '../../assets/Researching-bro.svg'
import { ContainerEmpty } from './style'

const Empty = () => {

  return (
    <ContainerEmpty>
      <h1>Nothing here...</h1>
      <img src={Researching} />
    </ContainerEmpty>
  )
}

export default Empty