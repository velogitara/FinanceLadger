import { FormContainer, H2 } from './Form.styled';
import { useFormik } from 'formik';

const ContactForm = () => {
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
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...JSON.stringify(values, null, 2),
        }),
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error));
    },
  });
  return (
    <FormContainer>
      <H2>Request CallBack</H2>
      <form
        onSubmit={formik.handleSubmit}
        name="contact"
        data-netlify="true"
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
    </FormContainer>
  );
};

export default ContactForm;
