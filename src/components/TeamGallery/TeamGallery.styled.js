import styled from 'styled-components';

export const GridBox = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  text-align: center;
`;
export const PersonName = styled.p`
  margin-top: 15px;

  font-weight: 400;
  font-size: 32px;
  line-height: 1.3;
`;
export const PersonDescription = styled.span`
  margin-top: 8px;

  font-size: 18px;
  line-height: 1.3;
`;
