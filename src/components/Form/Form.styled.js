import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 51px 20px 25px;
  @media screen and (min-width: 768px) {
    padding: 32px 32px 20px;
    width: 50%;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 69px;

  font-style: normal;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 31px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 25px;
  }
`;

export const NameInput = styled.input`
  display: inline-flex;
  width: 100%;
  padding: 16px 8px;
  /* margin-bottom: 31px; */
  /* margin-bottom: 25px; */

  font-size: 14px;
  line-height: 1.3;
  border: none;
`;

export const EmailInput = styled.input`
  display: inline-flex;
  width: 100%;
  padding: 16px 8px;
  /* margin-bottom: 25px; */

  font-size: 14px;
  line-height: 1.3;
  border: none;
`;
export const ButtonSubmit = styled.button`
  padding: 16px 56px;
  margin-top: 40px;

  font-size: 18px;
  line-height: 1.1;

  color: #ffffff;
  background: #28a745;
  border-radius: 5px;
  border-style: none;
`;
