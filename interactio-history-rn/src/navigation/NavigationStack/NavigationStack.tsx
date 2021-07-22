import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactsScreen from '../../components/ContactsScreen/ContactsScreen';
import ContactInformationScreen from '../ContactInformationScreen/ContactInformationScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ContactsScreen"
          component={ContactsScreen}
          options={{ title: 'Contacts' }}
        />
        <Stack.Screen
          name="ContactInformationScreen"
          component={ContactInformationScreen}
          options={{ title: 'Contact Information' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
