import React from 'react';
import { Text, View } from 'react-native';
import stylesMain from '../../../styles.global'

interface IContactDetailsItemsProps {
  communicationMethod: string
  telOrNumer: string
}

const ContactDetailsItem = ({ communicationMethod, telOrNumer }: IContactDetailsItemsProps) => {
  return (
    <View style={stylesMain.itemContainerBorderLeftDarkBlue}>
      <Text style={stylesMain.itemTitleSmallBlue}>{communicationMethod}</Text>
      <Text style={stylesMain.itemDescrBigDarkBlue}>{telOrNumer}</Text>
    </View>
  );
};

export default ContactDetailsItem;