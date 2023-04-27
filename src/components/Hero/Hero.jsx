import { HeroContainer, H1, HeroText, ReadMoreBtn } from './Hero.styled';
import ArrowBtn from '../../images/arrowReadMoreButton.svg';

const Hero = () => {
  return (
    <HeroContainer>
      <H1>The Sky Is The Limit</H1>
      <HeroText>We provide world class financial assistance</HeroText>
      <ReadMoreBtn>
        <img src={ArrowBtn} alt="" /> Read More
      </ReadMoreBtn>
    </HeroContainer>
  );
};

export default Hero;
