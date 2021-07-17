import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ContactScreenItem from './ContactScreenItem/ContactScreenItem'
import useContactsListData from '../../hooks/useContactsListData'
import stylesMain from '../../styles.global'

interface IContactsScreenProps {
  navigation: {
    navigate: (a: string) => void;
  },
}

const ContactsScreen = ({navigation}: IContactsScreenProps) => {
  const [ContactsListData] = useContactsListData()

  const navigateContactInformationScreen = () => navigation.navigate('ContactInformationScreen')

  return (
    <SafeAreaView style={stylesMain.containerDarkBlue}>
      <FlatList
        data={ContactsListData}
        keyExtractor={(item => item.id)}
        renderItem={({ item }) =>
          <ContactScreenItem
            item={item}
            navigate={navigateContactInformationScreen}
          />}
      />
    </SafeAreaView>
  );
};

export default ContactsScreen;
