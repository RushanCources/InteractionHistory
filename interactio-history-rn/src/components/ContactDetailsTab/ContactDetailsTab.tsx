import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactDetailsResponse, getInteractionResponse } from '../../store/selectors';
import { getContactDetails } from '../../store/slice/contactDetailsSlice';
import LoadContainer from '../common/LoadContainer/LoadContainer';
import ContactDetails from './ContactDetails/ContactDetails';
import stylesMain, { DARK_BLUE, WHITE } from '../../styles.global';

const ContactDetailsTab = () => {
  const { currentContact } = useSelector(getInteractionResponse);
  const contactDetails = useSelector(getContactDetailsResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactDetails(currentContact));
  }, [dispatch]);

  return (
    <LoadContainer
      loading={contactDetails.loading}
      error={contactDetails.error}
      styleContainer={stylesMain.containerWhite}
      styleLoadContainer={[stylesMain.containerVerticalCenter, stylesMain.containerWhite]}
      colorload={DARK_BLUE}
    >
      <ContactDetails {...contactDetails} />
    </LoadContainer>
  );
};
export default React.memo(ContactDetailsTab);
