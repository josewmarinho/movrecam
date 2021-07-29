import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      font-size: 2rem;
      color: #FFFF;

      &:hover {
         filter: brightness(0.8);
      }
    }
  }
`;