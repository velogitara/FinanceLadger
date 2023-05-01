import styled from 'styled-components';
import { ReadMoreBtn } from 'components/Hero/Hero.styled';
import { Container } from 'helpers/common-styles/Container';

export const BlogSection = styled.div`
  background: #0284d0;
`;
export const BlogContainer = styled(Container)`
  padding: 0;
`;
export const BlogPictureTextWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;
export const Picture = styled.picture`
  /* width: 50%; */
`;
export const BlogImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 493px;
    object-fit: cover;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 80px 0 86px 20px;

  font-weight: 400;
  color: #fff;

  @media screen and (min-width: 768px) {
    max-width: 50%;
    padding: 80px 20px 20px;
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
export const ReadBtn = styled(ReadMoreBtn)`
  color: inherit;
  background-color: inherit;
  display: inline-flex;
  align-self: start;
  border: white solid 1px;
  :hover {
    color: #0284d0;
    background: #f4f4f4;
  }
`;
