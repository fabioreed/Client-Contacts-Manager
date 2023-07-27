import { useContext, useEffect } from "react"
import Header from "../../components/Header"
import { ButtonDash, Card, ListCard, MainContainer, SectionContainerDash } from "./style"
import { DashContext } from "../../providers/DashContext"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import ModalCreate from "../../components/ModalCreate"
import ModalEdit from "../../components/ModalEdit"

const Dashboard = () => {
  const navigate = useNavigate()
  const { contact, setContact, modal, setModal , editModal, setEditModal, deleteModal, setDeleteModal } = useContext(DashContext)

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

          console.log(res, '1')
          console.log(res.data, '2')
          console.log(contact)

          navigate('/dashboard')
        } catch (error) {
          console.log(error)

          // navigate('/')

          // localStorage.clear()
        }
      }
      getClients()
    }
  }, [])

  // console.log(contact)

  return (
    <>
      <Header />
      <MainContainer>
        <ButtonDash onClick={() => setModal(!modal)}>+ Add Contact</ButtonDash>
        <SectionContainerDash>
          <ListCard>
            <Card>
              <h4>Name</h4>
              <span>1198888-9999</span>
              <span>email@mail.com</span>
              <span>Created at: 24/07/23</span>
              <div>
                <button onClick={() => setEditModal(!editModal)}>Edit</button>
                <button onClick={() => setDeleteModal(!deleteModal)}>Delete</button>
              </div>
            </Card>

            <Card>
              <h4>Name</h4>
              <span>1198888-9999</span>
              <span>email@mail.com</span>
              <span>Created at: 24/07/23</span>
              <div>
                <button onClick={() => setModal(!modal)}>Edit</button>
                <button onClick={() => setModal(!modal)}>Delete</button>
              </div>
            </Card>
            {modal && <ModalCreate />}
            {editModal && <ModalEdit />}
          </ListCard>
        </SectionContainerDash>
      </MainContainer>
    </>
  )
}

export default Dashboard