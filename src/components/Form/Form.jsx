import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  H2,
  NameInput,
  EmailInput,
  ButtonSubmit,
} from './Form.styled';

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
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less'),

      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(response => {
          if (response.status !== 200) {
            resetForm();
            toast.error('Sorry, some problem with request!', {
              position: toast.POSITION.TOP_CENTER,
            });
            return;
          }
          navigate('/success', { replace: true });
        })
        .catch(error => alert(error));
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
        noValidate
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <input name="bot-field" />
        </div>
        <div>
          <label htmlFor="firstName">
            <NameInput
              id="firstName"
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              placeholder="Enter your name"
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <EmailInput
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            ) : null}
          </label>
        </div>
        <ButtonSubmit
          type="submit"
          disabled={formik.isSubmitting}
          style={
            formik?.errors.email
              ? { backgroundColor: 'gray' }
              : { backgroundColor: '#28a745' }
          }
        >
          Send
        </ButtonSubmit>
      </form>
      <ToastContainer />
    </FormContainer>
  );
};

export default ContactForm;
