import {Box, Text} from 'native-base';
import React, {FC} from 'react';

import {MainStackScreenProps} from '../navigation/AppStacks';

export const ProfileScreen: FC<MainStackScreenProps<'VendorScreen'>> = () => {
  return (
    <Box>
      <Text>Profile</Text>
    </Box>
  );
};
