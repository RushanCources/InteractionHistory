<<<<<<< HEAD
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getInteractionResponse} from '../../store/selectors';
import {getContactInteractions} from '../../store/contactInteractionsSlice';
import stylesMain, {WHITE} from '../../styles.global';
||||||| 94106ab
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInteractionResponse } from '../../store/selectors';
import { getContactInteractions } from '../../store/contactInteractionsSlice';
import stylesMain, { WHITE } from '../../styles.global';
=======
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInteractionResponse } from '../../store/selectors';
import { getContactInteractions } from '../../store/slice/contactInteractionsSlice';
import stylesMain, { WHITE } from '../../styles.global';
>>>>>>> origin
import LoadContainer from '../common/LoadContainer/LoadContainer';
import ContactInteractionsItem from './Component/ContactInteractionsItem';

const ContactInteractionsTab = () => {
  const interactions = useSelector(getInteractionResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactInteractions(interactions.currentContact));
  }, [dispatch]);

  return (
    <LoadContainer
      loading={interactions.loading}
      error={interactions.error}
      styleContainer={stylesMain.containerWhite}
      styleLoadContainer={[
        stylesMain.containerVerticalCenter,
        stylesMain.containerWhite,
      ]}
      colorload={WHITE}>
      <ContactInteractionsItem {...interactions} />
    </LoadContainer>
  );
};

export default React.memo(ContactInteractionsTab);
