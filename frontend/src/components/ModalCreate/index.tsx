import { useContext } from "react"
import { BackgroundModal, CloseBtn, FieldSet, ModalContainer } from "./style"
import { DashContext } from "../../providers/DashContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./validators"
import { UserContext } from "../../providers/UserContext"
import Loading from "../Loading"

const ModalCreate = () => {
  const { setModal, modal, createContact } = useContext(DashContext)
  const { loading } = useContext(UserContext)

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const submit = async (data: any) => {
    await createContact(data)
    setModal(!modal)
  }

  return (
    <BackgroundModal>
      <ModalContainer onSubmit={handleSubmit(submit)}>
        <CloseBtn onClick={() => setModal(!modal)}>X</CloseBtn>
        <h2>Create a New Contact</h2>
        <FieldSet>
          <label>Name:</label>
          <input type="text" placeholder="Name your Contact" {...register('name')} />
        </FieldSet>
        <FieldSet>
          <label>Email:</label>
          <input type="email" placeholder="Email of your Contact" {...register('email')} />
        </FieldSet>
        <FieldSet>
          <label>Phone Number:</label>
          <input type="number" placeholder="Phone Number" {...register('number')} />
        </FieldSet>
        <button type="submit"
          disabled={loading}>{loading ? <Loading /> : <span>+Add</span>}
        </button>
      </ModalContainer>
    </BackgroundModal>
  )
}

export default ModalCreate