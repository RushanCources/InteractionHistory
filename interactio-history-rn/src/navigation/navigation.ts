import React from 'react';
import {NavigationContainerRef} from '@react-navigation/core';

interface NavigationParams {
  [key: string]: any;
}

class NavigationC {
  navigationRef = React.createRef<NavigationContainerRef>();

  initialRout = 'ContactsScreen';

  navigate = (routeName: string, params?: NavigationParams) =>
    this.navigationRef.current?.navigate(routeName, params);

  replace = (routeName: string, params?: NavigationParams) =>
    this.navigationRef.current?.reset({
      index: 0,
      routes: [{name: routeName, params}],
    });

  pop = () => {
    this.navigationRef.current?.goBack();
  };

  pop2 = () => {
    this.navigationRef.current?.goBack();
    this.navigationRef.current?.goBack();
  };
}

const Navigation = new NavigationC();
export default Navigation;
