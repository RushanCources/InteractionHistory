import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContactInteractions from '../../components/ContactInteractionsTab/ContactInteractionsTab';
import ContactDetails from '../../components/ContactDetailsTab/ContactDetailsTab';

const Tab = createMaterialTopTabNavigator();

const ContactScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={{ title: 'Contact Details' }}
      />
      <Tab.Screen
        name="ContactInteractions"
        component={ContactInteractions}
        options={{ title: 'Contact Interactions' }}
      />
    </Tab.Navigator>
  );
};

export default ContactScreen;
