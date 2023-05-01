import styled from 'styled-components';

export const TeamList = styled.ul`
  text-align: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  a:not(:last-of-type) {
    margin-right: 25px;
  }
`;
export const Svg = styled.svg`
  width: 35px;
  height: 35px;
  opacity: 1;
  fill: #fff;

  cursor: pointer;

  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0 30px;
`;

export const PersonName = styled.p`
  font-size: 20px;
  line-height: 1.35;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
  }
`;
export const PersonDescription = styled.span`
  font-size: 16px;
  line-height: 22px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`;
