import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  
  padding: 1rem;
  
  background-color: var(--primary-color);

  @media (min-width: 769px) {
    padding: 4rem 7rem;
  }
`

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;

  > img {
    width: 70px;
    border-radius: 50%;
    border: 2.4px solid var(--white);
  }

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    > span {
      position: absolute;
      bottom: -12px;

      background-color: var(--green);

      border-radius: 2px;

      padding: .2rem .4rem;

      color: var(--primary-color);

      font-size: .7rem;
      font-weight: 600;
    }
  }

  @media (min-width: 769px) {
    align-items: center;

    > section {
      gap: .7rem;

      > span {
        font-size: .8rem;
      }
    }
  }
`

export const DeleteAndExitContainer = styled.div`
  display: flex;
  gap: 1rem;
  /* justify-content: space-between; */
  flex-direction: column;

  > button {
    color: var(--white);
    font-size: .7rem;
    
    background: none;

    cursor: pointer;

    transition: .2s ease;

    &:hover {
      color: var(--green);
    }

    :nth-child(2):hover {
      color: var(--red);
    }
  }

  
  @media (min-width: 769px) {
    gap: 3rem;
    flex-direction: row;

    > button {
      font-size: .88rem;
    }
  }
`