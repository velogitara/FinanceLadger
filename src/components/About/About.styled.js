import styled from 'styled-components';
import { ReadMoreBtn } from 'components/Hero/Hero.styled';
import People from '../../images/home/people.jpg';
import People2x from '../../images/home/people@2x.jpg';

export const AboutSection = styled.div`
  padding: 0 28px;
  background: url(${People}), #28a745;
  background-size: 50% 100%;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .box {
      background-image: url(${People2x});
    }
  }
`;

export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding: 80px 0 86px 20px;
  max-width: 50%;

  font-weight: 400;
  color: #fff;
`;

export const P = styled.p`
  margin-bottom: 24px;

  font-size: 18px;
  line-height: 1.35;
`;
export const H2 = styled.h2`
  margin-bottom: 24px;

  font-size: 40px;
  line-height: 1.35;
`;
export const ReadMore = styled(ReadMoreBtn)`
  display: inline-flex;
  align-self: start;
  border: white solid 1px;
  :hover {
  }
`;
