import React, {FC} from 'react';
import {Box, IconButton, Pressable, ScrollView, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions, StatusBar} from 'react-native';

import {MainStackScreenProps} from '../navigation/AppStacks';
import {useEvents} from '../hooks/useEvents';
import {EventCard} from '../components/cards/EventCard';
import {Event} from '../resources/Event';
import {NearbyEventsList} from '../components/NearbyEventsList/NearbyEventsList';

const windowWidth = Dimensions.get('window').width;

export const HomeScreen: FC<MainStackScreenProps<'HomeScreen'>> = ({
  navigation,
}) => {
  const {data: events} = useEvents();

  const handleQRButtonPress = () => {
    navigation.navigate('QRCodeScannerScreen', {
      title: 'Nesto',
    });
  };

  return (
    <Box h="100%" w="100%" bgColor="#8ecae6">
      <StatusBar animated barStyle="light-content" backgroundColor="#8ecae6" />
      <Box mt={4}>
        <Text ml="10" color="white" fontWeight="bold" fontSize={16}>
          Near by
        </Text>
        <NearbyEventsList events={events} />
      </Box>
      <IconButton
        onPress={handleQRButtonPress}
        position="absolute"
        justifyContent="center"
        alignItems="center"
        bottom={4}
        left={windowWidth / 2 - 48}
        size={24}
        rounded="full"
        shadow={3}
        _pressed={{
          opacity: 0.8,
        }}
        backgroundColor="#e9c46a"
        icon={<Icon name="qrcode" size={48} color="white" />}
      />
    </Box>
  );
};
