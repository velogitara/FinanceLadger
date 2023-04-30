import styled from 'styled-components';

export const MsgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  gap: 10px;
  padding: 50px;
  border: 1px solid #0284d0;
  border-radius: 10px;
  background: hsla(217, 100%, 50%, 1);

  background: linear-gradient(
    90deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF", GradientType=1 );
`;
export const Btn = styled.button`
  padding: 15px 15px;
  border-radius: 10px;
  background-color: #fff;
  border-style: none;
  font-size: 20px;

  transition: transform 250ms ease-in-out;
  :hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 0px 3px #000000;
  }
`;
