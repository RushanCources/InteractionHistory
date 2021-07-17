import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { dataContactContext } from '../../context/dataContactContext';
import stylesMain from '../../styles.global';

const ContactDetailsTitleNav = () => {
	const { dataContact } = useContext(dataContactContext)

	return (
		<View style={stylesMain.containerNavTitle}>
			<Text style={stylesMain.navTitle}>
				{dataContact.firstName} {dataContact.lastName}
			</Text>
			<Text style={stylesMain.NavDescr}>
				{dataContact.jobTitle} at {dataContact.account?.name}
			</Text>
		</View>
	);
};

export default ContactDetailsTitleNav;