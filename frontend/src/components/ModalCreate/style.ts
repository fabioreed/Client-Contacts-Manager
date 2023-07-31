import styled from "styled-components"

export const BackgroundModal = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  
  position: fixed;
  top: 0;
  right: 0;
  
  background-color: rgba(0, 0, 0, 0.7);
`

export const ModalContainer = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2.4rem;

  background: var(--white);

  border-radius: 6px;

  > button {
    background-color: var(--green);
    
    padding: .7rem;

    border-radius: 6px;

    cursor: pointer;

    transition: .2s ease;

    &:hover {
      background-color: var(--dark-green);
      color: var(--white);
    }
  }

   @media (min-width: 769px) {
    width: 400px;
  }
`

export const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: .4rem;

  padding: .7rem 0;
  border: none;

  > label {
    font-size: .7rem;
    color: var(--dark-gray);
  }

  > input {
    border: 1px solid var(--dark-gray);
    border-radius: 6px;

    padding: .4rem .7rem;

    font-size: .8rem;
    
    ::placeholder {
      color: var(--light-gray);
    }
  }
`

export const CloseBtn = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;

  color: var(--primary-color);
  background: none;

  border-radius: 50%;

  padding: .5rem .7rem;

  transition: .2s ease;

  &:hover {
    color: var(--green);
  }
`