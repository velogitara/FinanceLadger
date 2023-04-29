import { Container } from 'helpers/common-styles/Container';
import { P, H2, Section, TextBox } from './TeamSection.styled';
import TeamGallery from 'components/TeamGallery/TeamGallery';

const TeamSection = () => {
  return (
    <Section>
      <Container>
        <TextBox>
          <P>Who we are</P>
          <H2>Our Professional Team</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </P>
        </TextBox>
        <TeamGallery />
      </Container>
    </Section>
  );
};
export default TeamSection;
