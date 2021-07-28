import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactsScreen from '../../components/ContactsScreen/ContactsScreen';
import ContactInformationScreen from '../ContactInformationScreen/ContactInformationScreen';
import ContactInformationTitleNavigation from './ContactDetailsTitleNav/ContactDetailsTitleNav';
import stylesMain from '../../styles.global'
import Navigation from '../navigation';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
