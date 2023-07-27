import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainerLogin = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.2rem;

  background-image: linear-gradient(to left bottom, #0d1d2d, #0f1e2e, #11202f, #122131, #142332, #152433, #172635, #182736, #1a2937, #1b2a39, #1d2c3a, #1f2e3c);

  > h2 {
    color: var(--white);
    font-size: 1.5rem;
  }

  > p {
    color: var(--light-gray);
    font-size: .7rem;
  }

  @media (min-width: 769px) {
    padding: 4rem 8rem;
    gap: 1.7rem;

    > h2 {
      font-size: 2.3rem;
    }

    > p {
      font-size: 1rem;
    }
  }
`

export const SectionContainerOfMain = styled.main`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;

    > aside {
      img {
        width: 50%;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
`

export const SectionContainerLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.3rem;

  position: relative;
  
  > div {
    display: flex;
    flex-direction: column;
    gap: .2rem;

    > label {
      color: var(--dark-gray);
      font-size: .65rem;
    }

    > input {
      padding: .7rem .7rem;
      border-radius: 6px;
      border: 1.2px solid var(--light-gray);
      font-size: .7rem;

      ::placeholder {
        color: var(--dark-gray);
      }
    }
  }

  @media (min-width: 769px) {
    padding: 4rem 8rem;

    width: 60%;

    > div {
      gap: .5rem;

      > label {
        font-size: .8rem;
      }

      > input {
        font-size: .8rem;
      }
    }
  }
`

export const ButtonContainerLogin = styled.aside`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  button {
    background: var(--green);
    padding: .7rem;
    border-radius: 6px;

    cursor: pointer;

    transition: .2s ease;
    
    &:hover {
      background-color: var(--mid-green);
      color: var(--white);
    }
  }

  @media (min-width: 769px) {
    gap: 1.2rem;

    > button {
      font-size: 1.1rem;
    }
  }
`

export const RegisterButton = styled(Link)`
    color: var(--dark-green);
    font-size: .7rem;
    font-weight: 600;

    align-self: flex-end;

    cursor: pointer;

    transition: .2s ease;

    &:hover {
      color: var(--mid-green);
    }

    @media (min-width: 769px) {
      font-size: .9rem;
    }
 
`

export const Error = styled.p`
    color: var(--negative);
    font-size: .5rem;
    letter-spacing: .04rem;
    transition: .4s ease;
`