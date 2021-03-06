import React from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';

interface ILoadBlockProps {
  styleContainer: object | Array<{}>
  colorActivityIndicator: string
}

const LoadBlock = ({ styleContainer, colorActivityIndicator }: ILoadBlockProps) => {
  return (
    <SafeAreaView style={styleContainer}>
      <ActivityIndicator size="large" color={colorActivityIndicator} />
    </SafeAreaView>
  );
};

export default LoadBlock;