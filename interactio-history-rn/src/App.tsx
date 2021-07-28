import React from 'react';
import {Provider} from 'react-redux';
import NavigationsStack from './navigation/NavigationStack/NavigationStack';
import {store} from './store/store';

const App = () => {
  return (
    <Provider store={store}>
        <NavigationsStack />
    </Provider>
  );
};

export default App;
