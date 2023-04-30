import styled from 'styled-components';
import { Container } from 'helpers/common-styles/Container';

export const MainContainer = styled(Container)`
  padding: 0;
`;

export const ContactSection = styled.div`
  width: 100%;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #f4f4f4;

  overflow: hidden;
  object-fit: cover;
`;
export const ContactImage = styled.div`
  width: 50%;
`;
