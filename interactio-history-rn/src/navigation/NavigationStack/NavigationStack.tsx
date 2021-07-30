import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactsScreen from '../../components/ContactsScreen/ContactsScreen';
import ContactInformationScreen from '../ContactInformationScreen/ContactInformationScreen';
import CreateFormScreen from '../../components/CreateFormScreen/CreateFormScreen';
import ContactInformationTitleNavigation from './ContactDetailsTitleNav/ContactDetailsTitleNav';
import Navigation from '../navigation';
import stylesMain from '../../styles.global'
import IconBack from './IconBack';

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
            headerBackImage: () => <IconBack />,
					}}
        />
        <Stack.Screen
          name="CreateFormScreen"
          component={CreateFormScreen}
          options={{ title: 'Create Form' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
