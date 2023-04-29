import { Container } from 'helpers/common-styles/Container';

import { AboutSection, AboutBox, ReadMore, P, H2 } from './About.styled';

const About = () => {
  return (
    <AboutSection id="About">
      <Container>
        <AboutBox>
          <P>What you are looking for</P>
          <H2>We provide bespoke solutions</H2>
          <P>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </P>
          <ReadMore>Read More</ReadMore>
        </AboutBox>
      </Container>
    </AboutSection>
  );
};

export default About;
