import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 1.3;
  color: #fff;
`;

export const AccentWords = styled(LogoContainer)`
  color: #28a745;
`;
