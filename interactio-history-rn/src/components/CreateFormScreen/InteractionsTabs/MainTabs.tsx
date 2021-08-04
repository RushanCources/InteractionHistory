import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CreateInteraction from '../CreateInteractionCall/CreateInteraction';
import CreateInteractionEmail from '../CreateInteractionEmail/CreateInteractionEmail';
import {getContactDetails} from '../../../store/contactDetailsSlice';
//import LoadContainer from '../common/LoadContainer/LoadContainer';
import {useDispatch, useSelector} from 'react-redux';
import {
  getContactDetailsResponse,
  getInteractionResponse,
} from '../../../store/selectors';

const Tab = createMaterialTopTabNavigator();

const NavigationTab = () => {
  const {currentContact} = useSelector(getInteractionResponse);
  const contactDetails = useSelector(getContactDetailsResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactDetails(currentContact));
  }, [dispatch]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="CreateCall"
        component={CreateInteraction}
        options={{title: 'Call'}}
      />
      <Tab.Screen
        name="CreateEmail"
        component={CreateInteractionEmail}
        options={{title: 'Email'}}
      />

      <Tab.Screen
        name="CreateMeeting"
        component={CreateInteraction}
        options={{title: 'Meeting'}}
      />
      <Tab.Screen
        name="CreateChat"
        component={CreateInteraction}
        options={{title: 'Chat'}}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
