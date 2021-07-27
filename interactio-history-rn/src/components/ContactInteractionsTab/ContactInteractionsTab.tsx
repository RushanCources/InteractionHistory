import React, {useCallback, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentContact, getInteractionResponse} from '../../store/selectors';
import {getContactInteractions} from '../../store/slice';
import stylesMain from '../../styles.global';
import ContactInteractionsTabFunctions from './Container';

const ContactInteractionsTab = () => {
  const interactions = useSelector(getInteractionResponse);
  const current = useSelector(getCurrentContact)
  const {response} = interactions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactInteractions(current));
  }, [dispatch]);

  return (
    <SafeAreaView style={[stylesMain.containerRowLeft, stylesMain.containerWhite]}>
      {response && ContactInteractionsTabFunctions(interactions)}
    </SafeAreaView>
  );
};

export default React.memo(ContactInteractionsTab);
