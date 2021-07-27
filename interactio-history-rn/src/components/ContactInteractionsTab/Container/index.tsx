import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import ContactInteractionsItem from '../Component/ContactInteractionsItem';
import { TState } from '../../../store/type';
import LoadBlock from '../../common/LoadBlock/LoadBlock';
import stylesMain from '../../../styles.global';

const ContactInteractionsTabFunctions = (props: TState): ReactNode => {
  const { response, loading, error } = props;
  let result: ReactNode;
  if (loading) {
    result = <LoadBlock 
                styleContainer={[stylesMain.containerVerticalCenter, stylesMain.containerDarkBlue]}
                colorActivityIndicator={'#fff'}
            />;
  } else if (error) {
    result = (
      <Text>
        `STATUS: ${error.status} MSG: ${error.message} \n`
      </Text>
    );
  } else {
    result = (
      <ContactInteractionsItem {...props}/>
    );
  }

  return result;
};

export default ContactInteractionsTabFunctions;