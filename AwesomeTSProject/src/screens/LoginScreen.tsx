import {Box, Text} from 'native-base';
import React, {FC} from 'react';

import {AuthStackScreenProps} from '../navigation/AppStacks';

export const LoginScreen: FC<AuthStackScreenProps<'LoginScreen'>> = () => {
  return (
    <Box>
      <Text>Login</Text>
    </Box>
  );
};
