import styled from 'styled-components';
import { Container } from 'helpers/common-styles/Container';

export const MainContainer = styled(Container)`
  padding: 0;
`;

export const ContactSection = styled.div`
  width: 100%;
`;
export const FormWrapper = styled.div`
  background: #f4f4f4;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const ContactImage = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const ContactPic = styled.picture`
  overflow: hidden;
`;

export const ContactImg = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 353px;
    object-fit: cover;
  }
`;
