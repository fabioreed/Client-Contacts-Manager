import { useContext } from 'react'
import { DashContext } from '../../providers/DashContext'
import { BackgroundListAllContacts, ButtonClose, CardList, ContainerListAllContacts, NothingHere, TopPartContainer } from './style'
import cartoon from '../../assets/Oil lamp-pana.svg'

const AllContacts = () => {
  const { contact, listAllContacts, setListAllContacts } = useContext(DashContext)

  return (
    <BackgroundListAllContacts>
      <ContainerListAllContacts>
        <TopPartContainer>
          <h2>All your Contacts</h2>
          <ButtonClose onClick={() => setListAllContacts(!listAllContacts)}>
            X
          </ButtonClose>
        </TopPartContainer>
        {contact.length ? (
          contact.map(item => (
            <CardList key={item.id}>
              <h3>{item.name}</h3>
              <span>{item.email}</span>
              <span>{item.number}</span>
            </CardList>
          ))
        ) : (
          <NothingHere>
            <img src={cartoon} />
            <h5>Nothing here yet D:</h5>
          </NothingHere>
        )}
      </ContainerListAllContacts>
    </BackgroundListAllContacts>
  )
}

export default AllContacts