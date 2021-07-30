import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsListResponse } from '../../store/selectors'
import { getContactsList } from '../../store/contactsListSlice';
import stylesMain from '../../styles.global'
import ContactsScreenFunction from './Container';

const ContactsScreen = () => {
  const contactsList = useSelector(getContactsListResponse);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch])

  return (
    <SafeAreaView style={stylesMain.containerDarkBlue}>
      {ContactsScreenFunction(contactsList)}
    </SafeAreaView>
  );
}

export default React.memo(ContactsScreen);
