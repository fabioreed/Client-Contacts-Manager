import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

/* #1F2E3C */
/* #162534 */
/* #0C1C2C */
/* #0D1D2D */
/* #FFFFFF */
/* #D1D9DD */
/* #9DA1A5 */
/* #C0E863 */
/* #131416 */
/* #23609C */
/* #2373A3 */
/* #12B1A6 */
/* #7B4F79 */
/* #925C76 */

  :root {
    --primary-color: #0C1C2C;
    --green: #C0E863;
    --dark-green: #8DB14B;
    --white: #FFFFFF;
    --light-gray: #D1D9DD;
    --dark-gray: #9DA1A5;
  }

  body {
    background-color: var(--background);
    font-family: 'Inter Tight', sans-serif;
  }

  button {
    font-weight: 600;
  }
`

export default GlobalStyle