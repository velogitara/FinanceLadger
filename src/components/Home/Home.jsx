import { Container } from 'helpers/common-styles/Container';

import { HomeSection, HomeBox, ReadMore, P, H2 } from './Home.styled';

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <HomeBox>
          <P>What you are looking for</P>
          <H2>We provide bespoke solutions</H2>
          <P>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </P>
          <ReadMore>Read More</ReadMore>
        </HomeBox>
      </Container>
    </HomeSection>
  );
};

export default Home;
