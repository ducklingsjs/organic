import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDatx} from '../hooks/useDatx/useDatx';
import {AuthStackNavigator, MainStackNavigator} from './AppStacks';

export const AppNavigator: FC = ({children}) => {
  const datx = useDatx();

  return (
    <NavigationContainer>
      {true ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
