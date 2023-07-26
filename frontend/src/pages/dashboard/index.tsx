import Header from "../../components/Header"
import { ButtonDash, Card, ListCard, MainContainer, SectionContainerDash } from "./style"

const Dashboard = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <ButtonDash>+ Add Contact</ButtonDash>
        <SectionContainerDash>
          <ListCard>
            <Card>
              <h4>Name</h4>
              <span>1198888-9999</span>
              <span>email@mail.com</span>
              <span>Created at: 24/07/23</span>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </Card>

            <Card>
              <h4>Name</h4>
              <span>1198888-9999</span>
              <span>email@mail.com</span>
              <span>Created at: 24/07/23</span>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </Card>
          </ListCard>
        </SectionContainerDash>
      </MainContainer>
    </>
  )
}

export default Dashboard