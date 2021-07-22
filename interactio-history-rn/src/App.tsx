import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import NavigationsStack from './navigation/NavigationStack/NavigationStack';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <NavigationsStack />
        {/* <Text>welcome</Text> */}
      </SafeAreaView>
    </Provider>
  );
};

export default App;
