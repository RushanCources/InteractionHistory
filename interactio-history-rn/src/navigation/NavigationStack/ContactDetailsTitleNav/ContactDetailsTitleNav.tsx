import React, { useContext } from 'react';
import { dataContactContext } from '../../../context/dataContactContext';
import ContactNameBlock from '../../../components/common/ContactNameBlock/ContactNameBlock';
import stylesMain from '../../../styles.global';

const ContactDetailsTitleNav = () => {
	const { dataContact } = useContext(dataContactContext)

	return (
		<ContactNameBlock
			item={dataContact}
			styleContainer={stylesMain.containerNavTitle}
			styleRow={stylesMain.containerRowCenter}
			styleTitle={stylesMain.navTitle}
			styleDescr={stylesMain.NavDescr}
		/>
	);
};

export default ContactDetailsTitleNav;