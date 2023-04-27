// import { Container } from 'helpers';
// import Logo from '../Logo';
// import Navigation from '../Navigation';
// import ThemeButton from 'components/ThemeButton';
// import { constants } from 'constants/constants';
// import { HeaderBox, MenuButton, MenuIcon } from './Header.styled';

// const { icons } = constants;

const Header = ({ onWidth, onOpenMenu, onCloseMenu }) => {
  return (
    <header>
      {/* <Container>
        <HeaderBox>
          <Logo />
          {onWidth >= 768 && (
            <Navigation onWidth={onWidth} onCloseMenu={onCloseMenu} />
          )}
          <ThemeButton />
          {onWidth < 1280 && (
            <MenuButton
              type="button"
              title="Toggle menu"
              onClick={() => onOpenMenu()}
            >
              <MenuIcon aria-label="menu icon">
                <use href={`${icons}#icon-menu`}></use>
              </MenuIcon>
            </MenuButton>
          )}
        </HeaderBox>
      </Container> */}
      <p>Hello</p>
    </header>
  );
};

export default Header;
