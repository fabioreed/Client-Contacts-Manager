import styled from "styled-components"

export const BackgroundModalEditProfile = styled.main`
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

export const ModalContainerEditProfile = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2.4rem;

  background: var(--white);

  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition: .4s ease;

  > fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: .2rem;

    > label {
      font-size: .8rem;
      color: var(--dark-gray);
    }

    > input {
      padding: .7rem;

      border-radius: 6px;

      border: 1px solid var(--light-gray);
    }  
  }

  
  > button {
    background-color: var(--green);

    padding: .7rem;

    border-radius: 6px;

    &:hover {
      background-color: var(--primary-color);
      color: var(--white);
    }
  }

  @media (min-width: 769px) {
    width: 400px;
  }
`

export const HeaderModalContainer = styled.div`
  position: relative;

  > h4 {
    font-size: 1rem;
    color: var(--dark-gray);
  }

  > button {
    position: absolute;
    top: -25px;
    right: -30px;

    color: var(--primary-color);
    background: none;

    border-radius: 50%;

    padding: .5rem .7rem;

    transition: .2s ease;

    &:hover {
      color: var(--green);
    }
  }
`
