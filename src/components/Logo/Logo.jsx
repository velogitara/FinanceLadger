import {} from './Logo.styled';
import FinanceLogo from '../../images/FinanceLogo.svg';

import { LogoContainer, AccentWords } from './Logo.styled';

const Logo = () => {
  return (
    <LogoContainer>
      <img src={FinanceLogo} alt="company logo" />
      <AccentWords>Finance</AccentWords> Ledger
    </LogoContainer>
  );
};

export default Logo;
