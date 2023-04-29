import styled from 'styled-components';
import Contact from '../../images/home/contact.jpg';
import Contact_2x from '../../images/home/contact@2x.jpg';

export const ContactSection = styled.div`
  padding: 0 28px;
  background: url(${Contact}), #f4f4f4;
  background-size: 50% 100%;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .box {
      background-image: url(${Contact_2x});
    }
  }
`;
