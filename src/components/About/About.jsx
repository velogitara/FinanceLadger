import {
  AboutSection,
  AboutBox,
  ReadMore,
  P,
  H2,
  AboutPictureTextWrapper,
  Picture,
  AboutContainer,
  Img,
} from './About.styled';
import ArrowSvg from 'helpers/common-styles/ArrowSvg';

import People from '../../images/home/people.jpg';
import People2x from '../../images/home/people@2x.jpg';
import PeopleWp from '../../images/home/people.webp';
import PeopleWp2x from '../../images/home/people@2x.webp';

const About = () => {
  return (
    <AboutSection id="About">
      <AboutContainer>
        <AboutPictureTextWrapper>
          <Picture>
            <source
              srcSet={`${PeopleWp} 1x, ${PeopleWp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${People} 1x, ${People2x}.jpg 2x`}
              type="image/jpeg"
            />
            <Img src={People} alt="People" />
          </Picture>
          <AboutBox>
            <P>What you are looking for</P>
            <H2>We provide bespoke solutions</H2>
            <P>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </P>
            <ReadMore>
              <ArrowSvg />
              Read More
            </ReadMore>
          </AboutBox>
        </AboutPictureTextWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
