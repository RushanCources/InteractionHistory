import React from 'react';
import {Provider} from 'react-redux';
import NavigationsStack from './navigation/NavigationStack/NavigationStack';
import {DataContactContextProvider} from './context/dataContactContext';
import {store} from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <DataContactContextProvider>
        <NavigationsStack />
      </DataContactContextProvider>
    </Provider>
  );
};

export default App;
