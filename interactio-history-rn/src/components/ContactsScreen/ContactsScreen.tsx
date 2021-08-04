<<<<<<< HEAD
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getContactsListResponse} from '../../store/selectors';
import {getContactsList} from '../../store/contactsListSlice';
import stylesMain, {WHITE} from '../../styles.global';
||||||| 94106ab
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsListResponse } from '../../store/selectors'
import { getContactsList } from '../../store/contactsListSlice';
import stylesMain, { WHITE } from '../../styles.global'
=======
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsListResponse } from '../../store/selectors';
import { getContactsList } from '../../store/slice/contactsListSlice';
import stylesMain from '../../styles.global';
>>>>>>> origin
import LoadContainer from '../common/LoadContainer/LoadContainer';
import ContactList from './ContactList/ContactList';
import {ImageBackground} from 'react-native';

const ContactsScreen = () => {
  const contactsList = useSelector(getContactsListResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch]);

  return (
    <ImageBackground
      source={require('../../img/Homepage.jpg')}
<<<<<<< HEAD
      style={stylesMain.imageBackground}>
||||||| 94106ab
      style={stylesMain.imageBackground}
      >
=======
      style={stylesMain.imageBackground}
    >
>>>>>>> origin
      <LoadContainer
        loading={contactsList.loading}
        error={contactsList.error}
<<<<<<< HEAD
        styleLoadContainer={[
          stylesMain.containerVerticalCenter,
          stylesMain.containerDarkBlue,
        ]}>
||||||| 94106ab
        styleLoadContainer={[stylesMain.containerVerticalCenter, stylesMain.containerDarkBlue]}
      >
=======
        styleLoadContainer={[stylesMain.containerVerticalCenter, stylesMain.container]}
      >
>>>>>>> origin
        <ContactList {...contactsList} />
      </LoadContainer>
    </ImageBackground>
  );
};

export default React.memo(ContactsScreen);
