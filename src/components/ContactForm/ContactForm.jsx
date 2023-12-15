import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { ErrorText, FormBtn, Input, WrapperForm } from './ContactForm.styled';
import { string, number, object } from 'yup';

let userSchema = object({
  name: string().min(3, 'Must be at least 3 characters').required(),
  number: number()
    .required()
    .typeError('Must be a number')
    .positive()
    .integer(),
});

export const ContactForm = ({
  addContact,
  initialName,
  initialNumber,
  contacts,
}) => {
  const handleSubmit = (values, { resetForm }) => {
    const { name } = values;
    const { number } = values;
    const newContact = { id: nanoid(), name, number };
    const isContactExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExists) {
      alert(`${name} is already in contacts.`);
      return;
    }
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: initialName, number: initialNumber }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <WrapperForm>
        <label htmlFor="name">
          <span>Name</span>
          <Input type="text" name="name" required />
          <ErrorText>
            <ErrorMessage name="name" />
          </ErrorText>
        </label>

        <label htmlFor="number">
          <span>Number</span>
          <Input type="tel" name="number" required />
          <ErrorText>
            <ErrorMessage name="number" />
          </ErrorText>
        </label>

        <FormBtn type="submit">Add contact</FormBtn>
      </WrapperForm>
    </Formik>
  );
};
