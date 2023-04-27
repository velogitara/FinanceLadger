import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.3;
    color: #fff;
  }
  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;
