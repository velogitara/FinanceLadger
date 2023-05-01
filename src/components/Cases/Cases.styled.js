import styled from 'styled-components';

export const CasesSection = styled.div`
  padding: 80px 0;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const P = styled.p`
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 1.37;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.38;
  }

  @media screen and (min-width: 1024px) {
    line-height: 1.8;
  }
`;
export const H2 = styled.h2`
  margin-bottom: 24px;

  font-weight: 400;
  font-size: 32px;
  line-height: 1.37;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.35;
  }

  @media screen and (min-width: 1024px) {
    line-height: 1.2;
  }
`;
export const Describe = styled(P)`
  margin-bottom: 36px;
  @media screen and (min-width: 768px) {
    line-height: 1.38;
  }
`;
