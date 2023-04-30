import { useNavigate } from 'react-router-dom';
import { MsgBox, Btn } from './SuccessfulSubmission.styled';
const SubmissionPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };
  return (
    <MsgBox>
      <h2>Thank you! Your form submission has been received</h2>
      <Btn type="button" onClick={handleClick}>
        Go back!
      </Btn>
    </MsgBox>
  );
};
export default SubmissionPage;
