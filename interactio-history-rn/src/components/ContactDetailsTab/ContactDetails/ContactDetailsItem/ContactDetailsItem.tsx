
import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import navigation from '../../../../navigation/navigation';
import { setMethodCommunication } from '../../../../store/slice/contactDetailsSlice';
import stylesMain from '../../../../styles.global';
import IconMail from '../../../icons/IconMail';
import IconSkype from '../../../icons/IconSkype';
import IconTel from '../../../icons/IconTel';

interface IContactDetailsItemsProps {
  communicationMethod: string
  telOrNumer: string
}

const ContactDetailsItem = ({ communicationMethod, telOrNumer }: IContactDetailsItemsProps) => {
  const dispatch = useDispatch()

  let connectURL: string;
  let IconCommunicationMethod: React.ReactNode;

  if (communicationMethod === 'Skype') {
    connectURL = `skype:${telOrNumer}?chat`;
    IconCommunicationMethod = <IconSkype style={[stylesMain.mr15, stylesMain.iconComMethod]} />;
  } else if (communicationMethod === 'Mail') {
    connectURL = `mailto:${telOrNumer}`;
    IconCommunicationMethod = <IconMail style={[stylesMain.mr15, stylesMain.iconComMethod]} />;
  } else {
    connectURL = `tel:${telOrNumer}`;
    IconCommunicationMethod = <IconTel style={[stylesMain.mr15, stylesMain.iconComMethod]} />;
  }

  const call = (connectURL: string): void => {
    dispatch(setMethodCommunication(communicationMethod))
    Linking.openURL(connectURL)
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <TouchableOpacity
      onPress={() => {
        call(connectURL)
        navigation.navigate('CreateFormScreen')

      }}
    >
      <View style={[stylesMain.itemContainerBorderLeftDarkBlue, stylesMain.containerRow]}>
        {IconCommunicationMethod}
        <View>
          <Text style={stylesMain.itemTitleSmallBlue}>{communicationMethod}</Text>
          <Text style={stylesMain.itemDescrBigDarkBlue}>{telOrNumer}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactDetailsItem;