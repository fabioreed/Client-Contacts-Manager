// "name": "Reed",
//   "email": "fafa@mail.com",
//     "password": "123456",
//       "number": "8398639116"

import { ButtonContainerRegister, HeaderContainerRegister, SectionContainerRegister } from "./style"

const Register = () => {
  return (
    <main>
      <HeaderContainerRegister>
        <h2>Register</h2>
        <p>Create your Account</p>
      </HeaderContainerRegister>
      <SectionContainerRegister>
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" placeholder='Your name' />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="text" placeholder='Your best email' />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="text" placeholder='Password' />
        </div>
        <div>
          <label htmlFor="">Phone number:</label>
          <input type="text" placeholder='(+1) 555-555' />
        </div>
        <ButtonContainerRegister>
          <span>Create Account</span>
          <button>Register</button>
        </ButtonContainerRegister>
      </SectionContainerRegister>
    </main>
  )
}

export default Register