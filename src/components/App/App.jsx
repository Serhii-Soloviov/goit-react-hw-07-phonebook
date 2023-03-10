import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { AppWrapper, AppHead, AppSubHead } from './App.styled';

export const App = () => {
    const dispatsh = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
      dispatsh(fetchContacts());
    }, [dispatsh]);
  return (
    <AppWrapper>
      <AppHead>Phonebook</AppHead>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <AppSubHead>Contacts</AppSubHead>
      <Filter />
      <ContactList />
    </AppWrapper>
  );
};
