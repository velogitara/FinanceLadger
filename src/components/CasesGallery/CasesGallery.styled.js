import styled from 'styled-components';

export const GridBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;

export const Img = styled.img`
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    @media screen and (min-width: 768px) {
      transform: scale(1.01);
    }
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100%;
`;
