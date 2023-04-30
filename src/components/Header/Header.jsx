import { useState, useEffect } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { HeaderBox, HeaderInner } from '../../components/Header/Header.styled';
import { Container } from 'helpers/common-styles/Container';
const Header = () => {
  const [scrollTop, setScrollTop] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
      setActive(true);
    };
    const handleScrollReset = () => {
      setActive(false);
      setScrollTop(window.scrollY);
    };

    setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScrollReset);
    };
  }, [active]);
  return (
    <HeaderBox onScroll={() => setActive(!active)} active={scrollTop}>
      <Container>
        <HeaderInner>
          <Logo />
          <Navigation />
        </HeaderInner>
      </Container>
    </HeaderBox>
  );
};

export default Header;
