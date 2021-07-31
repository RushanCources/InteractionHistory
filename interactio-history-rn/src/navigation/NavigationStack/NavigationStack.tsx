import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ContactsScreen from '../../components/ContactsScreen/ContactsScreen';
import ContactInformationScreen from '../ContactInformationScreen/ContactInformationScreen';
import MainTabs from '../../components/CreateFormScreen/InteractionsTabs/MainTabs';
import ContactInformationTitleNavigation from './ContactDetailsTitleNav/ContactDetailsTitleNav';
import Navigation from '../navigation';
<<<<<<< HEAD
import stylesMain from '../../styles.global';
||||||| 9b4ec57
import stylesMain from '../../styles.global'
=======
import stylesMain from '../../styles.global'
import IconBack from './IconBack';
>>>>>>> 61c4913b03c4059116aaecd587af0ea14ac018b6

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
<<<<<<< HEAD
          options={{
            headerStyle: stylesMain.stackNavHeaderBigDarkBlue,
            headerTitle: props => <ContactInformationTitleNavigation />,
          }}
||||||| 9b4ec57
					options={{
						headerStyle: stylesMain.stackNavHeaderBigDarkBlue,
						headerTitle: props => <ContactInformationTitleNavigation />,
					}}
=======
					options={{
						headerStyle: stylesMain.stackNavHeaderBigDarkBlue,
						headerTitle: props => <ContactInformationTitleNavigation />,
            headerBackImage: () => <IconBack />,
					}}
>>>>>>> 61c4913b03c4059116aaecd587af0ea14ac018b6
        />
        <Stack.Screen
          name="CreateFormScreen"
          component={MainTabs}
          options={{title: 'New Intetaction'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
