import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0px 20px;

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
    /* width: 704px; */
  }

  @media screen and (min-width: 1024px) {
    max-width: 1440px;
    padding: 0px 28px;
    /* width: 1248px; */
  }

  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1360px) {
    width: 1248px;
  } */
`;
