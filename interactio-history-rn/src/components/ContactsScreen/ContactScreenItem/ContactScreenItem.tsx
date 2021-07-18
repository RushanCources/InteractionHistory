import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import stylesMain from '../../../styles.global'
import { dataContactContext } from '../../../context/dataContactContext'
import useContactData from '../../../hooks/useContactData';
import navigation from '../../../navigation/navigation'

interface IContactScreenItemProps {
  item: {
    id: string,
    firstName: string,
    jobTitle: string,
    lastName: string,
    account: {
      name: string
    }
  }
}

const ContactScreenItem = ({ item }: IContactScreenItemProps) => {
  const { toggleDataContact } = useContext(dataContactContext)
  const [ContactData] = useContactData(item.id)

  return (
    <TouchableOpacity
      onPress={() => {
        toggleDataContact(ContactData)
        navigation.navigate('ContactInformationScreen')
      }}>
      <View style={stylesMain.itemContainerWhite}>
        <Text style={stylesMain.itemTitleBigDarkBlue}>{item.firstName} {item.lastName}</Text>
        <Text style={stylesMain.itemDescrSmallDarkBlue}>{item.jobTitle} at {item.account?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactScreenItem;