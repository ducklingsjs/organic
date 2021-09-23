import {Box, IBoxProps, IconButton, Image, Text} from 'native-base';
import React, {FC} from 'react';
import {Linking, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IEventCardProps extends IBoxProps {
  name: string;
  image: string;
  location: string;
  description: string;
  entry_fee: string;
  start_time: string;
  end_time: string;
  organizator_id: string;
}

export const EventCard: FC<IEventCardProps> = ({
  name,
  image,
  location,
  ...rest
}) => {
  const handleLocationPress = (location: string) => {
    console.log(location);
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${location}`,
      android: `${scheme}${location}(${label})`,
    });

    Linking.openURL(url as string);
  };

  return (
    <Box
      h="240px"
      w="180px"
      {...rest}
      p={2}
      justifyContent="center"
      alignItems="center">
      <Image
        alt={`${name} event image`}
        source={{uri: image}}
        h="92px"
        w="92px"
        resizeMode="cover"
        rounded="full"
        alignSelf="center"
      />
      <Text textAlign="center">{name}</Text>
      <IconButton
        justifyContent="center"
        alignItems="center"
        height={20}
        width={20}
        onPress={() => handleLocationPress(location)}
        icon={<Icon name="location-arrow" size={32} color="#e76f51" />}
      />
    </Box>
  );
};
