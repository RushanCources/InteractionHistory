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
import {getContactDetails} from '../../store/slice/contactDetailsSlice';
import LoadContainer from '../common/LoadContainer/LoadContainer';
import {WHITE} from '../../styles.global';

const CreateFormScreen = () => {
  const {methodCommunication} = useSelector(getContactDetailsResponse);
  console.log('methodCommunication: ', methodCommunication);

  const {currentContact} = useSelector(getInteractionResponse);
  const contactDetails = useSelector(getContactDetailsResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactDetails(currentContact));
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
