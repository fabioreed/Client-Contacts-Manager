import { HeaderContainerLogin, SectionContainerLogin, ButtonContainerLogin, SectionContainerOfMain, RegisterButton, Error, SocialMediaContainer, GoogleAndFacebook, SignUp, DontYouHave } from './style'
import LoginCartoon from '../../assets/Email capture-bro.svg'
import { useContext } from 'react'
import * as yup from 'yup'
import { ILoginFormValues, UserContext } from '../../providers/UserContext'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare, FaApple  } from 'react-icons/fa'
import Loading from '../../components/Loading'

const Login = () => {
  const schema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required')
  })

  const { userLogin, loading } = useContext(UserContext)
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
          <p>Start managing your Contacts faster and better</p>
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
            <input type="password" placeholder='Password' {...register('password')} />
            {errors.password?.message ? <Error>{errors.password.message} *</Error> : null}
          </div>
          <ButtonContainerLogin>
            <RegisterButton to='/register'>Create Account</RegisterButton>
            <button type='submit'
              disabled={loading}>{loading ? <Loading /> : <span>Login</span>}
            </button>
          </ButtonContainerLogin>
          <SocialMediaContainer>
            <div></div>
            <span>or</span>
            <div></div>
          </SocialMediaContainer>
          <GoogleAndFacebook>
            <button><FcGoogle /> Google</button>
            <button><FaFacebookSquare />Facebook</button>
            <button><FaApple />Apple</button>
          </GoogleAndFacebook>
          <DontYouHave>Don't you have an account? <SignUp to='/register'>Sign up</SignUp></DontYouHave>
        </SectionContainerLogin>
        <aside>
          <img src={LoginCartoon} />
        </aside>
      </SectionContainerOfMain>
    </main>
  )
}

export default Login