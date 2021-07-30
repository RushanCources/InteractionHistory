import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import ContactDetailsItem from './ContactDetails/ContactDetails';
import stylesMain from '../../styles.global';
import { useDispatch, useSelector } from 'react-redux';
import { getContactDetailsResponse, getInteractionResponse } from '../../store/selectors';
import { getContactDetails } from '../../store/contactDetailsSlice';
import ContactDetailsTabFunction from './Container';

const ContactDetailsTab = () => {
  const { currentContact } = useSelector(getInteractionResponse);
  const contactDetails = useSelector(getContactDetailsResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactDetails(currentContact));
  }, [dispatch]);

  return (
    <SafeAreaView style={stylesMain.containerWhite}>
      {ContactDetailsTabFunction(contactDetails)}
    </SafeAreaView>
  );
};
export default React.memo(ContactDetailsTab);
