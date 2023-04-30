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
  display: flex;
  flex-direction: row;
  align-items: center;

  overflow: hidden;
  object-fit: cover;
`;
export const Picture = styled.picture`
  width: 50%;
`;

export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  max-width: 50%;
  /* margin-left: auto; */
  padding: 80px 0 86px 20px;

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

  transition: background-color 250ms linear, color 250 linear;
  :hover {
    color: #28a745;
    background-color: #f4f4f4;
  }
`;
