import { Container } from 'helpers/common-styles/Container';
import sprite from '../../images/SocialIcons/sprite.svg';

import { IconContainer, Svg, FooterSection, Copyright } from './Footer.styled';

const Footer = () => {
  const icons = ['Facebook', 'Twitter', 'Youtube', 'Instagram'];
  function Icon({ id, ...props }) {
    return (
      <Svg {...props}>
        <use href={`${sprite}#${id}`} />
      </Svg>
    );
  }
  return (
    <FooterSection>
      <Container>
        <IconContainer>
          {icons.map(id => {
            return (
              <a href="##">
                <Icon key={id} id={id} />
              </a>
            );
          })}
          <Copyright>Copyright © 2023 - FinanceLedger</Copyright>
        </IconContainer>
      </Container>
    </FooterSection>
  );
};

export default Footer;
