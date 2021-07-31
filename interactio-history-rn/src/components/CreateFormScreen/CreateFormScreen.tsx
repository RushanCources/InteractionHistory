import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { getContactDetailsResponse } from '../../store/selectors';
import stylesMain from '../../styles.global'

const CreateFormScreen = () => {
  const { methodCommunication } = useSelector(getContactDetailsResponse);
  console.log('methodCommunication: ', methodCommunication);

  return (
    <SafeAreaView style={stylesMain.containerDarkBlue}>
    </SafeAreaView>
  );
};

export default CreateFormScreen;