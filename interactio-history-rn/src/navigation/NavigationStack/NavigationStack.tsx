import React from 'react';
import ContactsScreen from '../../components/ContactsScreen/ContactsScreen';
import ContactInformationScreen from '../ContactInformationScreen/ContactInformationScreen';
import ContactInformationTitleNavigation from './ContactDetailsTitleNav/ContactDetailsTitleNav';
import stylesMain from '../../styles.global'
import Navigation from '../navigation';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Contacts from '../../components/Contacts/Contacts';
import NavigationTab from '../NavigationTab/NavigationTab';
import MainTabs from '../../components/ContactDetails/CreateInteraction/InteractionsTabs/MainTabs';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer ref={Navigation.navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="ContactsScreen"
          component={ContactsScreen}
          options={{ title: 'Contacts' }}
        />
        <Stack.Screen
          name="ContactInformationScreen"
          component={ContactInformationScreen}
					options={{
						headerStyle: stylesMain.stackNavHeaderBigDarkBlue,
						headerTitle: props => <ContactInformationTitleNavigation />,
					}}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{title: 'Contacts'}}
        />
        <Stack.Screen
          name="NavigationTab"
          component={NavigationTab}
          options={{title: 'Contact Information'}}
        />
        <Stack.Screen
          name="NewInteraction"
          component={MainTabs}
          options={{
            title: 'New Interaction',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default NavigationStack;
