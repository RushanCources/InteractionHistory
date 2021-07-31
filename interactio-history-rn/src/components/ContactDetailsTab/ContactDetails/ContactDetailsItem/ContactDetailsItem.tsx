
import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import navigation from '../../../../navigation/navigation';
import { setMethodCommunication } from '../../../../store/contactDetailsSlice';
import stylesMain from '../../../../styles.global';

interface IContactDetailsItemsProps {
	communicationMethod: string
	telOrNumer: string
}

const ContactDetailsItem = ({ communicationMethod, telOrNumer }: IContactDetailsItemsProps) => {
	const dispatch = useDispatch()

	const call = (connect: string, connectMethod: string): void => {
		console.log('click');
		dispatch(setMethodCommunication(communicationMethod))

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