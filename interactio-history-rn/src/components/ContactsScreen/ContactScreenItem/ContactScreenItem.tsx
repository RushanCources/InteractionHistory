import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import stylesMain from '../../../styles.global'
import { dataContactContext } from '../../../context/dataContactContext'
import useContactData from '../../../hooks/useContactData';

interface IContactScreenItemProps {
  item: {
    id: string,
    firstName: string,
    jobTitle: string,
    lastName: string,
    account: {
      name: string
    }
  },
  navigate: () => void
}

const ContactScreenItem = ({ item, navigate}: IContactScreenItemProps) => {
  const { toggleDataContact } = useContext(dataContactContext)
  const [ContactData] = useContactData(item.id)

  return (
    <TouchableOpacity
      onPress={() => {
        navigate()
        toggleDataContact(ContactData)
      }}>
      <View style={stylesMain.itemContainerWhite}>
        <Text style={stylesMain.itemTitleBigDarkBlue}>{item.firstName} {item.lastName}</Text>
        <Text style={stylesMain.itemDescrSmallDarkBlue}>{item.jobTitle} at {item.account?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactScreenItem;