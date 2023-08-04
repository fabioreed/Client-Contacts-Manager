import { useContext } from "react"
import { ButtonContainerRegister, HeaderContainerRegister, SectionContainerRegister, LoginButton, Error } from "./style"
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserContext } from "../../providers/UserContext"
import { formSchema } from "./validations"
import { IRegisterFormValues } from "../../providers/@types"
import Loading from "../../components/Loading"

const Register = () => {
  const { userRegister, loading } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterFormValues>({
    resolver: yupResolver(formSchema)
  })

  const submit: SubmitHandler<IRegisterFormValues> = (data: IRegisterFormValues) => {
    userRegister(data)
  }

  return (
    <main>
      <HeaderContainerRegister>
        <h2>Register</h2>
        <p>Create your Account</p>
      </HeaderContainerRegister>

      <SectionContainerRegister onSubmit={handleSubmit(submit)}>
        <div>
          <label>Name:</label>
          <input type="text" placeholder='Nickname' {...register('name')}/>
          {errors.name?.message ? <Error>{errors.name.message} *</Error> : null}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" placeholder='Your email' {...register('email')} />
          {errors.email?.message ? <Error>{errors.email.message} *</Error> : null}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder='Password' {...register('password')} />
          {errors.password?.message ? <Error>{errors.password.message} *</Error> : null}
        </div>
        <div>
          <label>Phone number:</label>
          <input type="text" placeholder='Phone Number' {...register('number')} />
          {errors.number?.message ? <Error>{errors.number.message} *</Error> : null}
        </div>
        <ButtonContainerRegister>
          <LoginButton to='/'>
            Sign In
          </LoginButton>
          <button type='submit'
            disabled={loading}>{loading ? <Loading /> : <span>Register</span>}
          </button>
        </ButtonContainerRegister>
      </SectionContainerRegister>
    </main>
  )
}

export default Register