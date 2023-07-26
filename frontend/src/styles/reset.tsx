import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter Tight', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ul, ol, li {
    list-style: none;
  }
`

export default Reset