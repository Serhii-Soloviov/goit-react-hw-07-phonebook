import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { nanoid } from 'nanoid';

import { Formik} from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  InputForm,
  InputLabel,
  Input,
  LabelBox,
  FormButton,
  Error,
  InputBox,
} from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const initialValues = {
    id: '',
    name: '',
    number: '',
  };

  const SignupSchema = yup.object({
    number: yup
      .string('Enter correct')

      .required('Обов`язкове поле!')
      .max(13, 'Невірний номер телефону!')
      .matches(/((?=.*[+]){1})/, 'Введіть номер в форматі +380*********')
      .matches(/(?=.*\d{12})/, 'Потрібно ввести 12 цифр номеру!'),
    name: yup.string('hello')
      .min(2, 'Веедіть більше 2-х символів!')
      .max(16, 'Занадто довге ім`я!')
      .required('Обов`язкове поле! '),
  });
    const handleSubmit = (values, { resetForm }) => {
      const newContact = {
        id: 'id' + nanoid(),
        name: values.name,
        number: values.number,
      };

      if (contacts.find(contact => contact.name === newContact.name)) {
        return toast.error(`${newContact.name} is already in contacts`);
      }

      dispatch(addContact(newContact));

      resetForm();
    };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <InputForm>
          <LabelBox>
            <InputLabel htmlFor="name">Name</InputLabel>
            <InputBox>
              <Input type="text" name="name" />
              <Error component="p" name="name" />
            </InputBox>
          </LabelBox>
          <LabelBox>
            <InputLabel htmlFor="namber">Number</InputLabel>
            <InputBox>
              <Input type="tel" name="number" />
              <Error component="p" name="number" />
            </InputBox>
          </LabelBox>
          <FormButton type="submit">Add contact</FormButton>
        </InputForm>
      </Formik>
      <ToastContainer />
    </>
  );
};
