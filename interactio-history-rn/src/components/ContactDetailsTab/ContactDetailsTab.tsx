import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { dataContactContext } from '../../context/dataContactContext';
import ContactDetailsItem from './ContactDetailsItem/ContactDetailsItem';
import stylesMain from '../../styles.global';

const ContactDetailsTab = () => {
  const { dataContact } = useContext(dataContactContext)
  
  return (
    <SafeAreaView style={stylesMain.containerWhite}>
      <ContactDetailsItem
        communicationMethod='Mobile'
        telOrNumer={dataContact.mobile}
      />
      <ContactDetailsItem 
        communicationMethod='Work number'
        telOrNumer={dataContact.work}
      />
      <ContactDetailsItem 
        communicationMethod='Skype'
        telOrNumer={dataContact.skype}
      />
    </SafeAreaView>
  );
};

export default ContactDetailsTab;
