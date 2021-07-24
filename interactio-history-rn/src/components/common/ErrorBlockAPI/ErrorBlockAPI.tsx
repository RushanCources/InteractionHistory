import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import stylesMain from '../../../styles.global'

interface IErrorBlockAPIProps {
  styleContainer: object | Array<{}>
	styleBlockError: object | Array<{}>
	styleTextError: object | Array<{}>
	textError: string
}

const ErrorBlockAPI = ({ styleContainer, styleBlockError, styleTextError, textError }:IErrorBlockAPIProps) => {
	return (
		<SafeAreaView style={styleContainer}>
			<View style={styleBlockError}>
				<Text style={styleTextError}>
					{textError}
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default ErrorBlockAPI;