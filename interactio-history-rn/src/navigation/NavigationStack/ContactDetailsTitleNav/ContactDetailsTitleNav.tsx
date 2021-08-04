import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getContactDetailsResponse } from '../../../store/selectors';
import ContactNameBlock from '../../../components/common/ContactNameBlock/ContactNameBlock';
import stylesMain, { DARK_BLUE } from '../../../styles.global';
import LoadBlock from '../../../components/common/LoadContainer/LoadBlock/LoadBlock';
import { Animated, View } from 'react-native';

const ContactDetailsTitleNav = () => {
  const opacity = useRef(
    new Animated.Value(0)
  ).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      delay: 300,
      useNativeDriver: true,
    }).start()
  })

  const { response, loading } = useSelector(getContactDetailsResponse);

  if (loading) {
    return (
      <LoadBlock
        styleContainer={[stylesMain.containerVerticalCenter, stylesMain.containerDarkBlue]}
        colorActivityIndicator={DARK_BLUE}
      />
    );
  } else {
    return (
      <Animated.View
        style={{
          opacity: opacity,
        }}
      >
        <ContactNameBlock
          item={response}
          styleContainer={stylesMain.containerNavTitle}
          styleRow={stylesMain.containerRowCenter}
          styleTitle={stylesMain.navTitle}
          styleDescr={stylesMain.NavDescr}
        />
      </Animated.View>
    );
  }

};

export default ContactDetailsTitleNav;