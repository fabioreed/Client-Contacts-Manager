import { useContext } from 'react'
import { DashContext } from '../../providers/DashContext'
import { BackgroundListAllContacts, ButtonClose, CardList, ContainerListAllContacts } from './style'

const AllContacts = () => {
  const { contact, listAllContacts, setListAllContacts } = useContext(DashContext)

  return (
    <BackgroundListAllContacts>
      <ButtonClose onClick={() => setListAllContacts(!listAllContacts)}>X</ButtonClose>
      <ContainerListAllContacts>
        <h2>All your Contacts</h2>
        {contact.map(item => (
          <CardList key={item.id}>
            <h3>{item.name}</h3>
            <span>{item.email}</span>
          </CardList>
        ))}
      </ContainerListAllContacts>
    </BackgroundListAllContacts>
  )
}

export default AllContacts