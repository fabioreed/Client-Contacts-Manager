import styled from "styled-components";

export const ContainerEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .7rem;

  > h1 {
    font-size: 1.4rem;
    color: var(--primary-color);
  }

  @media (min-width: 769px) {
    font-size: 1.8rem;
    > img {
      width: 50%;
    }
  }
`