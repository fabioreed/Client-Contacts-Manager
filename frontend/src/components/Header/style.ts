import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  
  padding: 1rem;
  
  background-color: var(--primary-color);
  
  button {
    background: none;
    color: var(--light-gray);
    font-size: .8rem;
    font-weight: 600;

    transition: .2s ease;

    &:hover {
      background: var(--white);
      border-radius: 6px;

      color: var(--primary-color);

      padding: .4rem .7rem;
      opacity: .5;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: .3rem;

    > img {
      width: 40px;
    }

    > span {
      color: var(--light-gray);
      font-size: .5rem;
      font-weight: 400;

      display: none;

      @media (min-width: 769px) {
        display: block;
        font-size: .8rem;
      }
    }

    @media (min-width: 769px) {
      flex-direction: row;
      align-items: center;
    }
  }

  @media (min-width: 769px) {
    padding: 2.7rem;
  }

`