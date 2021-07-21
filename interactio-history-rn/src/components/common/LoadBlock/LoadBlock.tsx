import React from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import stylesMain from '../../../styles.global'

interface ILoadBlockProps {
  styleContainer: object | Array<{}>
  colorActivityIndicator: string
}

const LoadBlock = ({ styleContainer, colorActivityIndicator }: ILoadBlockProps) => {
  return (
    <SafeAreaView style={[stylesMain.containerVerticalCenter, stylesMain.containerDarkBlue]}>
      <ActivityIndicator size="large" color={colorActivityIndicator} />
    </SafeAreaView>
  );
};

export default LoadBlock;