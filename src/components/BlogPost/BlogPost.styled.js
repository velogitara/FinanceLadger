import styled from 'styled-components';
import { ReadMoreBtn } from 'components/Hero/Hero.styled';
import Blog from '../../images/home/blog.jpg';
import Blog2x from '../../images/home/blog@2x.jpg';

export const BlogSection = styled.div`
  padding: 0 28px;
  background: url(${Blog}), #0284d0;
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: right;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .box {
      background-image: url(${Blog2x});
    }
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
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
export const ReadBtn = styled(ReadMoreBtn)`
  color: inherit;
  background-color: inherit;
  display: inline-flex;
  align-self: start;
  border: white solid 1px;
  :hover {
  }
`;
