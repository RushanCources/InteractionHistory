import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ContactInteractions from '../../components/ContactInteractions/ContactInteractions';
import ContactDetails from '../../components/ContactDetails/ContactDetails';


const Tab = createMaterialTopTabNavigator();

const NavigationTab = () => {
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
}

export default NavigationTab;