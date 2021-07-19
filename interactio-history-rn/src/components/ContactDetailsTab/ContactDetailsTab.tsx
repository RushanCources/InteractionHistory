import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { dataContactContext } from '../../context/dataContactContext';
import ContactDetailsItem from './ContactDetailsItem/ContactDetailsItem';
import stylesMain from '../../styles.global';

const ContactDetailsTab = () => {
  const { dataContact } = useContext(dataContactContext)

  return (
    <SafeAreaView style={stylesMain.containerWhite}>
      {dataContact.mobile &&
        <ContactDetailsItem
          communicationMethod='Mobile'
          telOrNumer={dataContact.mobile}
        />
      }
      {
        dataContact.email && 
        <ContactDetailsItem
          communicationMethod='Mail'
          telOrNumer={dataContact.email}
        />
      }
      {
        dataContact.work && 
        <ContactDetailsItem
          communicationMethod='Work number'
          telOrNumer={dataContact.work}
        />
      }
      {
        dataContact.work && 
        <ContactDetailsItem
          communicationMethod='Skype'
          telOrNumer={dataContact.skype}
        />
      }
    </SafeAreaView>
  );
};

export default ContactDetailsTab;
