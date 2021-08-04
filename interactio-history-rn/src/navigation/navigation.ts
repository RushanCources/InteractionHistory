import React from 'react';
import {NavigationContainerRef} from '@react-navigation/core';

interface NavigationParams {
  [key: string]: any;
}

class NavigationC {
  navigationRef = React.createRef<NavigationContainerRef>();

  initialRout = 'ContactsScreen';

  navigate = (routeName: string, params?: NavigationParams) => {
    setTimeout(
      () => this.navigationRef.current?.navigate(routeName, params),
      0,
    );
  };

  replace = (routeName: string, params?: NavigationParams) => {
    setTimeout(
      () =>
        this.navigationRef.current?.reset({
          index: 0,
          routes: [{name: routeName, params}],
        }),
      0,
    );
  };

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
