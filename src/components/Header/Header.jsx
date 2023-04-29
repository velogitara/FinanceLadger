import { Container } from 'helpers/common-styles/Container';

import Logo from '../Logo';
import Navigation from '../Navigation';
import Hero from '../Hero';
import { HeaderBox, HeaderSection } from './Header.styled';

const Header = () => {
  return (
    <HeaderSection id="Home">
      <Container>
        <HeaderBox>
          <Logo />
          <Navigation />
        </HeaderBox>
        <Hero />
      </Container>
    </HeaderSection>
  );
};

export default Header;
