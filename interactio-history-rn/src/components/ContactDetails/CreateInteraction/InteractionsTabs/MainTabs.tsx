import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CreateInteraction from '../CreateInteractionCall/CreateInteraction';
import CreateInteractionEmail from '../CreateInteractionEmail/CreateInteractionCall/CreateInteractionEmail';

const Tab = createMaterialTopTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Create call"
        component={CreateInteraction}
        options={{title: 'Call'}}
      />
      <Tab.Screen
        name="Create email"
        component={CreateInteractionEmail}
        options={{title: 'Email'}}
      />
      <Tab.Screen
        name="Create meeting"
        component={CreateInteraction}
        options={{title: 'Meeting'}}
      />
      <Tab.Screen
        name="Create conversation"
        component={CreateInteraction}
        options={{title: 'Chat'}}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
