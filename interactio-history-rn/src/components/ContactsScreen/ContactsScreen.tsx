import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsListResponse } from '../../store/selectors'
import { getContactsList } from '../../store/contactsListSlice';
import stylesMain, { WHITE } from '../../styles.global'
import LoadContainer from '../common/LoadContainer/LoadContainer';
import ContactList from './ContactList/ContactList';
import { ImageBackground } from 'react-native';

const ContactsScreen = () => {
  const contactsList = useSelector(getContactsListResponse);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch])

  return (
    <ImageBackground
      source={require('../../img/Homepage-hero2.jpg')}
      style={stylesMain.imageBackground}
      >
      <LoadContainer
        loading={contactsList.loading}
        error={contactsList.error}
        styleLoadContainer={[stylesMain.containerVerticalCenter, stylesMain.container]}
        colorload={WHITE}
      >
        <ContactList {...contactsList} />
      </LoadContainer>
    </ImageBackground>
  );
}

export default React.memo(ContactsScreen);
