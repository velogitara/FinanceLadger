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

export const Thumb = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 768px) {
    transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      transform: scale(1.04);
    }
  }
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media screen and (min-width: 768px) {
    background-color: rgba(0, 0, 0, 0.3);

    transition: background-color 500ms ease-in-out;
  }
`;

export const GalleryItem = styled.div`
  :hover ${Overlay} {
    @media screen and (min-width: 768px) {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;
export const Img = styled.img`
  /* transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1); */
  /* :hover ${Overlay} {
    @media screen and (min-width: 768px) {
      transform: scale(1.03);
    }
  } */
`;
