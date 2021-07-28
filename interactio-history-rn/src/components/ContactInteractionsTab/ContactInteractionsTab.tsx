import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getInteractionResponse } from '../../store/selectors';
import { getContactInteractions } from '../../store/slice';
import stylesMain from '../../styles.global';
import ContactInteractionsTabFunctions from './Container';

const ContactInteractionsTab = () => {
  const interactions = useSelector(getInteractionResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactInteractions(interactions.currentContact));
  }, [dispatch]);

  return (
    <SafeAreaView style={[stylesMain.containerRowLeft, stylesMain.containerWhite]}>
      {ContactInteractionsTabFunctions(interactions)}
    </SafeAreaView>
  );
};

export default React.memo(ContactInteractionsTab);
