import styled from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;

  @media (min-width: 769px) {
    padding: 4rem 7rem;
  }
`

export const ButtonDash = styled.button`
  background: var(--green);
  color: var(--primary-color);
  font-size: .8rem;
  font-weight: 600;

  padding: .4rem .7rem;
  width: fit-content;

  border-radius: 6px;

  align-self: flex-end;

  cursor: pointer;

  transition: all .2s ease;

  &:hover {
    background-color: var(--dark-green);
    color: var(--white);
  }

  @media (min-width: 769px) {
    align-self: flex-start;
  }
`

export const SectionContainerDash = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 769px) {
      justify-content: space-between;
    }
`

export const ListCard = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 769px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.7rem;
    }
`

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  border-radius: 6px;

  padding: 1rem;
  width: 100%;

  flex-shrink: 0;

  > h4 {
    font-size: .9rem;
    color: var(--dark-gray);
  }

  > span {
    font-size: .7rem;
    color: var(--light-gray);
  }

  > div {
    display: flex;
    justify-content: space-between;

    button {
      background-color: var(--green);
      padding: .7rem;
      border-radius: 6px;

      font-size: .7rem;

      cursor: pointer;

      transition: all .2s ease;

      &:hover {
        background-color: var(--dark-green);
        color: var(--white);
      }
    }
  }

  @media (min-width: 769px) {
    width: 280px;
  }
`

export const ContainerOfTheButtons = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;

  > span {
    position: absolute;
    top: -6px;
    right: 0;
  }
`