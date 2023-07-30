import styled from "styled-components";

export const BackgroundListAllContacts = styled.main`
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

export const ContainerListAllContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .9rem;

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
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 35%;
  right: 37%;

  z-index: 3;

  background-color: var(--primary-color);

  color: var(--white);

  border-radius: 50%;

  padding: .5rem .7rem;
`

export const CardList = styled.li`
  display: flex;
  flex-direction: column;
  gap: .4rem;

  width: 300px;

  position: relative;

  > h3 {
    font-size: .8rem;
  }

  > span {
    font-size: .7rem;
    color: var(--dark-gray);
  }

  border-bottom: 1px solid var(--dark-gray);
`