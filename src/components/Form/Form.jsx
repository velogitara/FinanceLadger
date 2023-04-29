import { FormContainer, H2 } from './Form.styled';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const navigate = useNavigate();

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
    },
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values, null, 2));
      // console.log(encode({ 'form-name': 'contact', ...values }));

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(response => {
          console.log(response);
          if (response.status !== 200) {
            resetForm();
            toast.error('Sorry, some problem with request!', {
              position: toast.POSITION.TOP_CENTER,
            });
            // throw Error();
            return;
          }
          navigate('/success', { replace: true });
        })
        .catch(error => alert(error));
      // e.preventDefault();
    },
  });
  return (
    <FormContainer>
      <H2>Request CallBack</H2>
      <form
        action="/success"
        onSubmit={formik.handleSubmit}
        name="contact"
        data-netlify="true"
        netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <input name="bot-field" />
        </div>
        <div>
          <label htmlFor="firstName">
            <input
              id="firstName"
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="Enter your name"
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
      <ToastContainer />
    </FormContainer>
  );
};

export default ContactForm;
