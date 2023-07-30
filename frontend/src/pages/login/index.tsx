import { HeaderContainerLogin, SectionContainerLogin, ButtonContainerLogin, SectionContainerOfMain, RegisterButton, Error } from './style'
import LoginCartoon from '../../assets/Email capture-bro.svg'
import { useContext } from 'react'
import * as yup from 'yup'
import { ILoginFormValues, UserContext } from '../../providers/UserContext'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const Login = () => {
  const schema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required')
  })

  const { userLogin } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors }} = useForm<ILoginFormValues>({
    resolver: yupResolver(schema)
  })

  const submit: SubmitHandler<ILoginFormValues> = (data: ILoginFormValues) => {
    userLogin(data)
  }

  return (
    <main>
        <HeaderContainerLogin>
          <h2>Sign in to your Account</h2>
          <p>Sign in to your Account</p>
        </HeaderContainerLogin>
      <SectionContainerOfMain>
        <SectionContainerLogin onSubmit={handleSubmit(submit)}>
          <div>
            <label>Email</label>
            <input type="text" placeholder='Your best email' {...register('email')} />
            {errors.email?.message ? <Error>{errors.email.message} *</Error> : null}
          </div>
          <div>
            <label>Password</label>
            <input type="text" placeholder='Password' {...register('password')} />
            {errors.password?.message ? <Error>{errors.password.message} *</Error> : null}
          </div>
          <ButtonContainerLogin>
            <RegisterButton to='/register'>Create Account</RegisterButton>
            <button type='submit'>Login</button>
          </ButtonContainerLogin>
        </SectionContainerLogin>
        <aside>
          <img src={LoginCartoon} />
        </aside>
      </SectionContainerOfMain>
    </main>
  )
}

export default Login