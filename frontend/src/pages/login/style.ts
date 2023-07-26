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
`

export const SectionContainerLogin = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.3rem;

  
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
`

export const ButtonContainerLogin = styled.aside`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  > span {
    color: var(--dark-green);
    font-size: .7rem;
    font-weight: 600;

    align-self: flex-end;
  }

  button {
    background: var(--green);
    padding: .7rem;
    border-radius: 6px;

    cursor: pointer;
    
    &:hover {
      background-color: var(--dark-green);
      color: var(--white);
    }
  }
`