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
  height: 500px;
  overflow-y: auto;

  * {
    scrollbar-width: thin;
    scrollbar-color: blue orange;
  }

/* Works on Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: var(--white);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--light-gray);
    border-radius: 20px;
    border: .8px solid var(--dark-gray);
  }

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
    width: 460px;
  }
`

export const ButtonClose = styled.button`
  z-index: 3;

  color: var(--primary-color);
  background: none;

  border-radius: 50%;

  padding: .5rem .7rem;

  transition: .2s ease;

  &:hover {
    color: var(--green);
  }
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

  border-right: 1.4px solid var(--green);

  @media (min-width: 769px) {
    width: 380px;
  }
`

export const TopPartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: .6rem;

  margin-bottom: 1rem;

  > h2 {
    color: var(--dark-gray);
    font-size: 1.3rem;
    z-index: 3;
  }
`

export const NothingHere = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  align-items: center;

  @media (min-width: 769px) {
    img {
      width: 80%;
    }
  }
`