import React from 'react';
import { useSelector } from 'react-redux';
import { getContactDetailsResponse } from '../../../store/selectors';
import ContactNameBlock from '../../../components/common/ContactNameBlock/ContactNameBlock';
import stylesMain, { WHITE } from '../../../styles.global';
import LoadBlock from '../../../components/common/LoadBlock/LoadBlock';

const ContactDetailsTitleNav = () => {
  const { response, loading } = useSelector(getContactDetailsResponse);
  
  if (loading) {
    return (
      <LoadBlock
        styleContainer={[stylesMain.containerVerticalCenter, stylesMain.containerDarkBlue]}
        colorActivityIndicator={WHITE}
      />
    );
  } else {
    return (
      <ContactNameBlock
        item={response}
        styleContainer={stylesMain.containerNavTitle}
        styleRow={stylesMain.containerRowCenter}
        styleTitle={stylesMain.navTitle}
        styleDescr={stylesMain.NavDescr}
      />
    );
  }

};

export default ContactDetailsTitleNav;