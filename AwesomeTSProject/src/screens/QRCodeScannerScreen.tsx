import {Box, Text} from 'native-base';
import React, {FC} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {BarCodeReadEvent, RNCamera} from 'react-native-camera';

import {MainStackScreenProps} from '../navigation/AppStacks';
import {Vendor} from '../resources/Vendor';

export const QRCodeScannerScreen: FC<
  MainStackScreenProps<'QRCodeScannerScreen'>
> = ({navigation, route}) => {
  const handleQRRead = (e: BarCodeReadEvent) => {
    try {
      const vendor: Vendor = JSON.parse(e.data);

      if (vendor) {
        navigation.replace('VendorScreen', {
          title: vendor.name,
        });
      }
    } catch (error) {}
  };

  return (
    <Box>
      <QRCodeScanner
        showMarker
        onRead={handleQRRead}
        flashMode={RNCamera.Constants.FlashMode.auto}
      />
    </Box>
  );
};
