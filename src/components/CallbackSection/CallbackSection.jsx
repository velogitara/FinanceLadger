import ContactForm from 'components/Form/Form';
import {
  ContactSection,
  FormWrapper,
  ContactImage,
  ContactImg,
  MainContainer,
} from './CallbackSection.styled';

import Contact from '../../images/home/contact.jpg';
import Contact2x from '../../images/home/contact@2x.jpg';
import ContactWp from '../../images/home/contact.webp';
import ContactWp2x from '../../images/home/contact@2x.webp';

const CallbackSection = () => {
  return (
    <ContactSection id="Contact">
      <MainContainer>
        <FormWrapper>
          <ContactImage>
            <picture>
              <source
                srcSet={`${ContactWp} 1x, ${ContactWp2x} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${Contact} 1x, ${Contact2x}.jpg 2x`}
                type="image/jpeg"
              />
              <ContactImg src={Contact} alt="contact" />
            </picture>
          </ContactImage>
          <ContactForm />
        </FormWrapper>
      </MainContainer>
    </ContactSection>
  );
};
export default CallbackSection;
