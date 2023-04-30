import styled from 'styled-components';

export const FooterSection = styled.div`
  background: #333333;

  width: 100%;
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  /* position: relative;
  top: 50%; */
  /* transform: translate(0, -50%); */
  padding: 20px 0 10px 0;

  a {
    display: inline-block;
  }
  a:not(:last-of-type) {
    margin-right: 25px;
  }
`;
export const Svg = styled.svg`
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
export const Copyright = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 20px;
`;
