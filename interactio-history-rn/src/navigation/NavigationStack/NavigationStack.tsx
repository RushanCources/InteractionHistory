import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ContactsScreen from '../../components/ContactsScreen/ContactsScreen';
import ContactInformationScreen from '../ContactInformationScreen/ContactInformationScreen';
import MainTabs from '../../components/CreateFormScreen/InteractionsTabs/MainTabs';
import ContactInformationTitleNavigation from './ContactDetailsTitleNav/ContactDetailsTitleNav';
import Navigation from '../navigation';
import stylesMain from '../../styles.global';
import IconBack from './IconBack';
import CreateFormScreen from '../../components/CreateFormScreen/CreateFormScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer ref={Navigation.navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="ContactsScreen"
          component={ContactsScreen}
          options={{title: 'Contacts'}}
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
          options={{title: 'Intetaction'}}
        />
        <Stack.Screen
          name="CreateNewInteraction"
          component={MainTabs}
          options={{title: 'New Intetaction'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
