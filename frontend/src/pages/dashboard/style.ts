import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
`

export const ButtonDash = styled(Link)`
  background: var(--green);
  color: var(--primary-color);
  font-size: .8rem;
  font-weight: 600;

  padding: .4rem .7rem;
  width: fit-content;

  border-radius: 6px;

  align-self: flex-end;
`

export const SectionContainerDash = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ListCard = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  border-radius: 6px;

  padding: 1rem;

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
    }

    width: 100%;
  }
`