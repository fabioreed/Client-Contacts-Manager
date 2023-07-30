import { useContext, useEffect, useState } from "react"
import Header from "../../components/Header"
import { ButtonDash, Card, ContainerOfTheButtons, ListCard, MainContainer, SectionContainerDash } from "./style"
import { DashContext, IClient } from "../../providers/DashContext"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import ModalCreate from "../../components/ModalCreate"
import ModalEdit from "../../components/ModalEdit"
import Empty from "../../components/Empty"
import AllContacts from "../../components/AllContacts"
import { Badge } from '@mui/material'

const Dashboard = () => {
  const navigate = useNavigate()
  const [selectedContact, setSelectedContact] = useState<IClient | null>(null)
  const { contact, setContact, modal, setModal, removeContact, listAllContacts, setListAllContacts } = useContext(DashContext)

  useEffect(() => {
    const token = localStorage.getItem('@clientToken')
    if (token) {
      const getClients = async () => {
        try {
          const res = await api.get('/contacts', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })

          setContact(res.data)

          navigate('/dashboard')
        } catch (error) {
          console.log(error)
          navigate('/')
          localStorage.clear()
        }
      }
      getClients()
    }
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        <ContainerOfTheButtons>
          <ButtonDash onClick={() => setModal(!modal)}>+ Add Contact</ButtonDash>
          <ButtonDash onClick={() => setListAllContacts(!listAllContacts)}>
            See All Contacts
          </ButtonDash>
          <span>
            {contact.length > 0 ? <Badge badgeContent={contact.length} color='primary' /> : <Badge invisible={true} />}
          </span>
        </ContainerOfTheButtons>
        <SectionContainerDash>
          {contact.length ? (
            <ListCard>
              {contact.map((item) => (
                <Card key={item.id}>
                  <h4>{item.name}</h4>
                  <span>Number {item.number}</span>
                  <span>{item.email}</span>
                  <span>Created at: {item.createdAt}</span>
                  <div>
                    <button onClick={() => setSelectedContact(item)}>Edit</button>
                    <button onClick={() => removeContact(item.id)}>Delete</button>
                  </div>
                </Card>
              ))}
            </ListCard>
            ) : (
            <Empty />)}
        </SectionContainerDash>
      </MainContainer>

      { selectedContact && <ModalEdit id={selectedContact.id} contact={selectedContact} /> }
      { modal && <ModalCreate /> }
      { listAllContacts && <AllContacts /> }
    </>
  )
}

export default Dashboard