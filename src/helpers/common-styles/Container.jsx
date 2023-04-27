import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1360px) {
    width: 1248px;
  }
`;
