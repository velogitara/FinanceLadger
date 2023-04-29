import { useNavigate } from 'react-router-dom';

const SubmissionPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };
  return (
    <div>
      Thank you! Your form submission has been received
      <button type="button" onClick={handleClick}>
        Go back
      </button>
    </div>
  );
};
export default SubmissionPage;
