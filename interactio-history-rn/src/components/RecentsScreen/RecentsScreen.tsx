import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsRecentsResponse } from '../../store/selectors'
import stylesMain from '../../styles.global'
import LoadContainer from '../common/LoadContainer/LoadContainer';
import { ImageBackground } from 'react-native';
import { getContactsRecents } from '../../store/slice/contactsRecentsSlice';
import RecentsList from './RecentsList/RecentsList';

const RecentsScreen = () => {
  const contactsRecents = useSelector(getContactsRecentsResponse);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContactsRecents());
  }, [dispatch])

  return (
    <ImageBackground
      source={require('../../img/Homepage.jpg')}
      style={stylesMain.imageBackground}
    >
      <LoadContainer
        loading={contactsRecents.loading}
        error={contactsRecents.error}
        styleLoadContainer={[stylesMain.containerVerticalCenter, stylesMain.container]}
      >
        <RecentsList {...contactsRecents} />
      </LoadContainer>
    </ImageBackground>
  );
}

export default React.memo(RecentsScreen);