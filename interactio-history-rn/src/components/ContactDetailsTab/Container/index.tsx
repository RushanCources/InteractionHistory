import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import LoadBlock from '../../common/LoadBlock/LoadBlock';
import stylesMain, { DARK_BLUE } from '../../../styles.global';
import { TContactDetailsState } from '../../../store/type';
import ContactDetails from '../ContactDetails/ContactDetails';

const ContactDetailsTabFunction = (props: TContactDetailsState): ReactNode => {
  const { loading, error } = props;

  if (loading) {
    return (
      <LoadBlock
        styleContainer={[stylesMain.containerVerticalCenter, stylesMain.containerWhite]}
        colorActivityIndicator={DARK_BLUE}
      />
    );
  } else if (error) {
    return (
      <Text>
        `STATUS: ${error.status} MSG: ${error.message} \n`
      </Text>
    );
  } else {
    return <ContactDetails {...props} />
  }
};

export default ContactDetailsTabFunction;