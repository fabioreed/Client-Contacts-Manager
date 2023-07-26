import { HeaderContainerLogin, SectionContainerLogin, ButtonContainerLogin } from './style'

const Login = () => {
  return (
    <main>
      <HeaderContainerLogin>
        <h2>Sign in to your Account</h2>
        <p>Sign in to your Account</p>
      </HeaderContainerLogin>
      <SectionContainerLogin>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Your best email' />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" placeholder='Password' />
        </div>
        <ButtonContainerLogin>
          <span>Create Account</span>
          <button>Login</button>
        </ButtonContainerLogin>
      </SectionContainerLogin>
    </main>
  )
}

export default Login