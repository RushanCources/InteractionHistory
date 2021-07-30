import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import LoadBlock from '../../common/LoadBlock/LoadBlock';
import stylesMain, { WHITE } from '../../../styles.global';
import { TContactsListState } from '../../../store/type';
import ContactScreenItem from '../ContactScreenItem/ContactScreenItem';

const ContactsScreenFunction = (props: TContactsListState): ReactNode => {
  const { loading, error } = props;

  if (loading) {
    return (
      <LoadBlock
        styleContainer={[stylesMain.containerVerticalCenter, stylesMain.containerDarkBlue]}
        colorActivityIndicator={WHITE}
      />
    );
  } else if (error) {
    return (
      <Text>
        `STATUS: ${error.status} MSG: ${error.message} \n`
      </Text>
    );
  } else {
    return <ContactScreenItem {...props} />
  }
};

export default ContactsScreenFunction;