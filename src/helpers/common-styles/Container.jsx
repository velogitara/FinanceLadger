import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0px 20px;

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1440px;
    padding: 0px 28px;
  }
`;
