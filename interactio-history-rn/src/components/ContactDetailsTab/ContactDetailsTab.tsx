import React, { useContext } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { dataContactContext } from '../../context/dataContactContext';
import ContactDetailsItem from './ContactDetailsItem/ContactDetailsItem';
import stylesMain from '../../styles.global';

const ContactDetailsTab = () => {
  const { dataContact } = useContext(dataContactContext)

  const mobile = dataContact.mobile;
  const email = dataContact.email;
  const work = dataContact.work;
  const skype = dataContact.skype;

  if (mobile || email || work || skype) {
    return (
      <SafeAreaView style={stylesMain.containerWhite}>
        {mobile &&
          <ContactDetailsItem
            communicationMethod='Mobile'
            telOrNumer={mobile}
          />
        }
        {
          email &&
          <ContactDetailsItem
            communicationMethod='Mail'
            telOrNumer={email}
          />
        }
        {
          work &&
          <ContactDetailsItem
            communicationMethod='Work number'
            telOrNumer={work}
          />
        }
        {
          skype &&
          <ContactDetailsItem
            communicationMethod='Skype'
            telOrNumer={skype}
          />
        }
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={[stylesMain.containerRowCenter, stylesMain.containerWhite]}>
        <Text style={stylesMain.itemDescrBigDarkBlue}>Still no contacts</Text>
      </SafeAreaView>
    )
  }
};

export default ContactDetailsTab;
