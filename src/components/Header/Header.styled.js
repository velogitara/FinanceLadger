import styled from 'styled-components';
import Showcase from '../../images/home/showcase@2x.jpg';

export const HeaderSection = styled.div`
  background-color: aliceblue;
  padding: 10px 28px 20px 28px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Showcase});
  background-size: cover;
`;

export const HeaderBox = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
  }
`;
