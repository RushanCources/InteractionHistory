
import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import navigation from '../../../../navigation/navigation';
import stylesMain from '../../../../styles.global';

interface IContactDetailsItemsProps {
	communicationMethod: string
	telOrNumer: string
}

const ContactDetailsItem = ({ communicationMethod, telOrNumer }: IContactDetailsItemsProps) => {
	const call = (connect: string, connectMethod: string): void => {
		const connectURL =
			(connectMethod === 'Skype') ? `skype:${connect}?chat`
				: (connectMethod === 'Mail') ? `mailto:${connect}`
					: `tel:${connect}`

		Linking.openURL(connectURL)
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<TouchableOpacity
			onPress={() => {
				call(telOrNumer, communicationMethod)
				navigation.navigate('CreateFormScreen')
			}}
		>
			<View style={stylesMain.itemContainerBorderLeftDarkBlue}>
				<Text style={stylesMain.itemTitleSmallBlue}>{communicationMethod}</Text>
				<Text style={stylesMain.itemDescrBigDarkBlue}>{telOrNumer}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ContactDetailsItem;