import styled from 'styled-components';
import { ReadMoreBtn } from 'components/Hero/Hero.styled';
import { Container } from 'helpers/common-styles/Container';

export const AboutContainer = styled(Container)`
  padding: 0;
`;
export const AboutSection = styled.div`
  background-color: #28a745;
`;
export const AboutPictureTextWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const Picture = styled.picture`
  /* width: 50%; */
`;

export const Img = styled.img`
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 589px;
    object-fit: cover;
  }
`;
export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  padding: 79px 20px;

  font-weight: 400;
  color: #fff;

  @media screen and (min-width: 768px) {
    padding: 62px 32px 62px;
    max-width: 50%;
  }
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
export const ReadMore = styled(ReadMoreBtn)`
  display: inline-flex;
  align-self: start;
  border: white solid 1px;

  transition: background-color 250ms linear, color 250 linear;
  :hover {
    color: #28a745;
    background-color: #f4f4f4;
  }
`;
