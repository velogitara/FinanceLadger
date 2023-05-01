import {} from './Logo.styled';
import FinanceLogo from '../../images/FinanceLogo.svg';

import { LogoContainer, AccentWords } from './Logo.styled';

const Logo = () => {
  return (
    <LogoContainer>
      <img src={FinanceLogo} alt="company logo" width={39} height={31} />
      <AccentWords>Finance</AccentWords> Ledger
    </LogoContainer>
  );
};

export default Logo;
