import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 38px;

  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 1.35;
  color: #fff;

  transition: transform 300ms cubic-bezier(0.79, 0.11, 0.45, 0.89);

  :hover {
    transform: scale(1.05);
    letter-spacing: 0.2;
    cursor: default;
  }
`;

export const AccentWords = styled(LogoContainer)`
  color: #28a745;
`;
