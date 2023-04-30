import styled from 'styled-components';
// import { Item } from 'react-photoswipe-gallery';

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const Img = styled.img`
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    transform: scale(1.1);
  }
`;
