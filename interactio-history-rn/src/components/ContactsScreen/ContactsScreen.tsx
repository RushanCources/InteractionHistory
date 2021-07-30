import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsListResponse } from '../../store/selectors'
import { getContactsList } from '../../store/contactsListSlice';
import stylesMain, { WHITE } from '../../styles.global'
import LoadContainer from '../common/LoadContainer/LoadContainer';
import ContactScreenItem from './ContactScreenItem/ContactScreenItem';

const ContactsScreen = () => {
  const contactsList = useSelector(getContactsListResponse);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch])

  return (
    <LoadContainer
      loading={contactsList.loading}
      error={contactsList.error}
      styleContainer={stylesMain.containerDarkBlue}
      styleLoadContainer={[stylesMain.containerVerticalCenter, stylesMain.containerDarkBlue]}
      colorload={WHITE}
    >
      <ContactScreenItem {...contactsList} />
    </LoadContainer>
  );
}

export default React.memo(ContactsScreen);
