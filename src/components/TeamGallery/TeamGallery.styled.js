import styled from 'styled-components';

export const TeamList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  /* display: flex;
  gap: 20px; */
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
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.6);

  transform: translateY(100%);

  transition: transform 500ms ease-in-out;
`;

export const TeamItem = styled.li`
  :hover ${Overlay} {
    transform: translateY(0);
  }
`;

export const Thumb = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    transform: scale(1.04);
  }
`;

export const Picture = styled.picture`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const IconContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
`;
export const Svg = styled.svg`
  margin-left: 25px;
  width: 35px;
  height: 35px;
  opacity: 1;

  cursor: pointer;

  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
