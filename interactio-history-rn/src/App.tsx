import React from 'react';
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