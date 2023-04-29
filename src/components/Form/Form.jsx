import { FormContainer, H2 } from './Form.styled';
import { useFormik } from 'formik';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormContainer>
      <H2>Request CallBack</H2>
      <form
        onSubmit={formik.handleSubmit}
        name="contact v1"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact v1" />
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
    </FormContainer>
  );
};

export default ContactForm;
