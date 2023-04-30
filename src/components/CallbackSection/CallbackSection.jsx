import { Container } from 'helpers/common-styles/Container';
import ContactForm from 'components/Form/Form';
import { ContactSection } from './CallbackSection.styled';

const CallbackSection = () => {
  return (
    <ContactSection id="Contact">
      <Container>
        <ContactForm />
      </Container>
    </ContactSection>
  );
};
export default CallbackSection;
