import styled from 'styled-components';
import Showcase from '../../images/home/showcase@2x.jpg';

export const HeroSection = styled.div`
  /* margin: 183px 0 270px 0; */
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 1440px;

  text-align: center;
  color: #fff;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Showcase});
  background-size: cover;
`;

export const HeroInner = styled.div`
  padding: 270px 0;
`;

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 55px;
  line-height: 1.35;

  margin-bottom: 16px;
`;
export const HeroText = styled.p`
  font-size: 40px;
  line-height: 1.35;

  margin-bottom: 24px;
`;
export const ReadMoreBtn = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  font-size: 18px;
  padding: 16px 32px;
  color: #fff;

  background: #28a745;
  border-radius: 5px;
  border-style: none;

  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background-color: #2ebf4f;
  }
`;
