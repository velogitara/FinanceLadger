import styled from 'styled-components';

export const TeamSectionWrapper = styled.div`
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 0;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 72px 0 63px 0;
`;
export const P = styled.p`
  margin-bottom: 24px;

  font-size: 16px;
  line-height: 1.37;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`;
export const H2 = styled.h2`
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 1.37;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
  }
`;
