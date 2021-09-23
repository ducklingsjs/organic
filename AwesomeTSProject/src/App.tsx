import {Box, NativeBaseProvider, StatusBar} from 'native-base';
import React from 'react';

import {DatxProvider} from './hooks/useDatx/context';
import {AppNavigator} from './navigation/AppNavigator';
import {AppCollection} from './store';
import {theme} from './styles/theme';

const App = () => {
  const store = new AppCollection();

  return (
    <DatxProvider client={store}>
      <NativeBaseProvider theme={theme}>
        <AppNavigator />
      </NativeBaseProvider>
    </DatxProvider>
  );
};

export default App;
