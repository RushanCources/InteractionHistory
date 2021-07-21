import React from 'react';
import { SafeAreaView, Text, ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ContactScreenItem from './ContactScreenItem/ContactScreenItem'
import useContactsListData from '../../hooks/useContactsListData'
import ErrorBlockAPI from '../common/ErrorBlockAPI/ErrorBlockAPI';
import stylesMain from '../../styles.global'
import LoadBlock from '../common/LoadBlock/LoadBlock';

const ContactsScreen = () => {
  const [{ ContactsListData, isLoaded, error }] = useContactsListData()

  if (error) {
    return (
      <ErrorBlockAPI
        styleContainer={[stylesMain.containerVerticalCenter, stylesMain.containerDarkBlue]}
        styleBlockError={stylesMain.itemContainerWhite}
        styleTextError={stylesMain.itemTitleBigDarkBlue}
        textError={`Oops! Something went wrong...Сheck the quality of internet connection and restart the application.If this didn't solve the problem, then let us know.`}
      />
    );
  } else if (!isLoaded) {
    return (
      <LoadBlock 
        styleContainer={[stylesMain.containerVerticalCenter, stylesMain.containerDarkBlue]}
        colorActivityIndicator={'#fff'}
      />
    );
  } else {
    return (
      <SafeAreaView style={stylesMain.containerDarkBlue}>
        <FlatList
          data={ContactsListData}
          keyExtractor={(item => item.id)}
          renderItem={({ item }) =>
            <ContactScreenItem
              item={item}
            />
          }
        />
      </SafeAreaView>
    );
  }
};

export default ContactsScreen;
