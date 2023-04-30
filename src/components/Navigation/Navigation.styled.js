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
    /* color: #000; */
  }
  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;
export const ListItem = styled.li`
  position: relative;
  overflow: hidden;

  ::before {
    display: ${props => (props.activeId === props.id ? 'block' : 'none')};
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #28a745;
  }

  ::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #28a745;

    transform: translateX(-100%);
    transition: transform 250ms ease-in-out;
  }
  :hover::after {
    transform: translateX(0);
  }
`;
