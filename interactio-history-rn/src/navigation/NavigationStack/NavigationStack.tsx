import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Contacts from '../../components/Contacts/Contacts';
import NavigationTab from '../NavigationTab/NavigationTab';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Contacts"
                    component={Contacts}
                    options={{ title: 'Contacts' }}
                />
                <Stack.Screen
                    name="NavigationTab"
                    component={NavigationTab}
                    options={{ title: 'Contact Information' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationStack;