import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContactInteractionsTab from '../../components/ContactInteractionsTab/ContactInteractionsTab';
import ContactDetailsTab from '../../components/ContactDetailsTab/ContactDetailsTab';

const Tab = createMaterialTopTabNavigator();

const NavigationTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="ContactDetailsTab"
				component={ContactDetailsTab}
				options={{ title: 'Contact Details' }}
			/>
			<Tab.Screen
				name="ContactInteractionsTab"
				component={ContactInteractionsTab}
				options={{ title: 'Contact Interactions' }}
			/>
		</Tab.Navigator>
	);
}

export default NavigationTab;