import React, { useEffect, useRef } from 'react';
import { Animated, SafeAreaView, Text } from 'react-native';
import { TContactDetailsState } from '../../../store/type';
import stylesMain from '../../../styles.global';
import ContactDetailsItem from './ContactDetailsItem/ContactDetailsItem';

const ContactDetails = (props: TContactDetailsState) => {
  const transformY = useRef(
    new Animated.Value(40)
  ).current
  const opacity = useRef(
    new Animated.Value(0)
  ).current

  useEffect(() => {
    Animated.timing(transformY, {
      toValue: 0,
      delay: 300,
      useNativeDriver: true,
    }).start()
    Animated.timing(opacity, {
      toValue: 1,
      delay: 300,
      useNativeDriver: true,
    }).start()
  }, [])

  const { response } = props

  const mobile = response.mobile;
  const email = response.email;
  const work = response.work;
  const skype = response.skype;

  if (mobile || email || work || skype) {
    return (
      <Animated.View
        style={{
          transform: [{ translateY: transformY }],
          opacity: opacity,
        }}
      >
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
      </Animated.View>
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