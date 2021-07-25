import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import ContactInteractionsTab from './components/ContactInteractionsTab/ContactInteractionsTab';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NavigationsStack from './navigation/NavigationStack/NavigationStack';
import { DataContactContextProvider } from './context/dataContactContext';

const App = () => {
  return (
    <DataContactContextProvider>
      <NavigationsStack />
    </DataContactContextProvider>
  )
};

export default App;
