import React from 'react';
import { Text } from 'react-native';
import LoadBlock from './LoadBlock/LoadBlock';
import { NetworkError } from '../../../store/type';
import { SafeAreaView } from 'react-native-safe-area-context';
import stylesMain, { WHITE } from '../../../styles.global';

interface ILoadContainerProps {
  loading: boolean,
  error: null | NetworkError,
  children: React.ReactNode,
  styleContainer?: [] | {},
  styleLoadContainer?: [] | {},
  colorload?: string,
}

const LoadContainer = ({ loading, error, children, styleLoadContainer = stylesMain.container, colorload = WHITE, styleContainer }: ILoadContainerProps) => {

  if (loading) {
    return (
      <LoadBlock
        styleContainer={styleLoadContainer}
        colorActivityIndicator={colorload}
      />
    );
  } else if (error) {
    return (
      <Text>
        `STATUS: ${error.status} MSG: ${error.message} \n`
      </Text>
    );
  } else {
    return (
      <SafeAreaView style={styleContainer}>
        {children}
      </SafeAreaView>
    )
  }
};

export default LoadContainer;