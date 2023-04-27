import styled from 'styled-components';
import { ReadMoreBtn } from 'components/Hero/Hero.styled';
import People from '../../images/home/people.jpg';

export const HomeSection = styled.div`
  padding: 0 28px;
  /* min-height: 460px; */
  background: url(${People}), #28a745;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding: 80px 0 86px 20px;
  max-width: 50%;

  /* background: #28a745; */
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
  border: white solid 1px;
`;
