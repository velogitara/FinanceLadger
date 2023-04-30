import styled from 'styled-components';

export const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 32px 0;

  background-color: ${props => (props.active ? 'rgba(0,0,0,0.3)' : '')};
  opacity: ${props => (props.active ? '0.8' : '')};
  transition: background-color 0.5s linear, opacity 0.5s linear;
`;

export const HeaderInner = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
