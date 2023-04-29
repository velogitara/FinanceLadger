import { Container } from 'helpers/common-styles/Container';
import CasesGallery from 'components/CasesGallery/CasesGallery';

import { CasesSection, TextBox, P, H2, Describe } from './Cases.styled';

const Cases = () => {
  return (
    <CasesSection id="Cases">
      <Container>
        <TextBox>
          <P>This is what we do</P>
          <H2>Business Cases</H2>
          <Describe>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae, voluptatem.
          </Describe>
        </TextBox>
        <CasesGallery />
      </Container>
    </CasesSection>
  );
};

export default Cases;
