import {
  HeroSection,
  HeroInner,
  H1,
  HeroText,
  ReadMoreBtn,
} from './Hero.styled';
import ArrowBtn from '../../images/arrowReadMoreButton.svg';
import { Container } from 'helpers/common-styles/Container';

const Hero = () => {
  return (
    <HeroSection id="Home">
      <Container>
        <HeroInner>
          <H1>The Sky Is The Limit</H1>
          <HeroText>We provide world class financial assistance</HeroText>
          <ReadMoreBtn>
            <img src={ArrowBtn} alt="" /> Read More
          </ReadMoreBtn>
        </HeroInner>
      </Container>
    </HeroSection>
  );
};

export default Hero;
