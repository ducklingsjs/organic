import {
  Box,
  Center,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  VStack,
} from 'native-base';
import React, {FC, useMemo} from 'react';
import {VendorCard} from '../components/cards/VendorCard';
import {useVendors} from '../hooks/useVendors';

import {MainStackScreenProps} from '../navigation/AppStacks';

export const EventScreen: FC<MainStackScreenProps<'EventScreen'>> = ({
  navigation,
  route,
}) => {
  const {data: vendors} = useVendors(route.params.eventId);

  const handleVendorPress = (title: string, id: string) => {
    navigation.navigate('VendorScreen', {
      title,
      vendorId: id,
    });
  };

  return (
    <Box height="100%" pt="60px" bgColor="#8ecae6">
      <StatusBar animated barStyle="dark-content" backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack mt={4} space={4} alignItems="center">
          {vendors?.map(relatedVendor => (
            <Pressable
              _pressed={{
                opacity: 0.9,
              }}
              onPress={() =>
                handleVendorPress(relatedVendor.name, relatedVendor.id)
              }>
              <VendorCard {...relatedVendor} bgColor="white" rounded={20} />
            </Pressable>
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
};
