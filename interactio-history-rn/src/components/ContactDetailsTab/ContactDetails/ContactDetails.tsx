import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TContactDetailsState } from '../../../store/type';
import stylesMain from '../../../styles.global';
import ContactDetailsItem from './ContactDetailsItem/ContactDetailsItem';

const ContactDetails = (props: TContactDetailsState) => {
  const { response } = props

  const mobile = response.mobile;
  const email = response.email;
  const work = response.work;
  const skype = response.skype;

  if (mobile || email || work || skype) {
    return (
      <SafeAreaView>
        {mobile &&
          <ContactDetailsItem
            communicationMethod='Mobile'
            telOrNumer={mobile}
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
          email &&
          <ContactDetailsItem
            communicationMethod='Mail'
            telOrNumer={email}
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

export default ContactDetails;