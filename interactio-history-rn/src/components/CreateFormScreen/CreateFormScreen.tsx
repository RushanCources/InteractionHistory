import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import stylesMain from '../../styles.global';
import CreateInteractionEmail from './CreateInteractionEmail/CreateInteractionEmail';
import CreateInteractionCall from './CreateInteractionCall/CreateInteraction';
import CreateInteractionMeeting from './CreateInteractionMeeting/CreateInteractionMeeting';
import {useDispatch, useSelector} from 'react-redux';
import {
  getContactDetailsResponse,
  getInteractionResponse,
} from '../../store/selectors';
import {getContactDetails} from '../../store/contactDetailsSlice';
import {getContactInteractions} from '../../store/contactInteractionsSlice';
import {postContactInteraction} from '../../store/postFormDataSlice';

const CreateFormScreen = () => {
  const {methodCommunication} = useSelector(getContactDetailsResponse);
  console.log('methodCommunication: ', methodCommunication);

  const dispatch = useDispatch();

  const interactions = useSelector(getInteractionResponse);
  const contactDetails = useSelector(getContactDetailsResponse);

  useEffect(() => {
    dispatch(getContactDetails(interactions.currentContact));
  }, [dispatch]);

  const renderEmailForm = methodCommunication === 'Mail' && (
    <CreateInteractionEmail {...contactDetails} />
  );
  const renderCallForm = (methodCommunication === 'Mobile' ||
    methodCommunication === 'Work number') && (
    <CreateInteractionCall {...contactDetails} />
  );

  const renderMeetingForm = methodCommunication === 'Skype' && (
    <CreateInteractionMeeting {...contactDetails} />
  );

  return (
    <SafeAreaView style={stylesMain.containerDarkBlue}>
      {renderCallForm}
      {renderEmailForm}
      {renderMeetingForm}
    </SafeAreaView>
  );
};

export default CreateFormScreen;
