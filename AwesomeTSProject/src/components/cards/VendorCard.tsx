import {Box, Center, IBoxProps, Image, Text} from 'native-base';
import React, {FC} from 'react';

interface IVendorCardProps extends IBoxProps {
  name: string;
  location: string;
}

export const VendorCard: FC<IVendorCardProps> = ({name, location, ...rest}) => {
  return (
    <Center h="100px" w="180px" {...rest} p={4}>
      {/* {/* <Image
        alt={`${name} event image`}
        source={{uri: image}}
        h="92px"
        w="92px"
        resizeMode="cover"
        rounded="full"
        alignSelf="center"
      /> */}
      <Text fontWeight="bold" fontSize="lg">
        {name}
      </Text>
    </Center>
  );
};
