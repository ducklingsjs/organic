import {
  Box,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  VStack,
  Modal,
  Center,
  Button,
} from 'native-base';
import React, {FC, useState} from 'react';

import {MainStackScreenProps} from '../navigation/AppStacks';
import {useVendor} from '../hooks/useVendor';
import {MenuItem} from '../resources/MenuItem';
import {useCreateOrder} from '../hooks/useCreateOrder';

export const VendorScreen: FC<MainStackScreenProps<'VendorScreen'>> = ({
  navigation,
  route,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMenuItem, setSelectedItem] = useState<MenuItem>();

  console.log(route.params.vendorId);
  const {data: vendor} = useVendor(route.params.vendorId);
  const {createOrder} = useCreateOrder();

  const handleMenuItemPress = (menuItem: MenuItem) => {
    setSelectedItem(menuItem);
    setShowModal(true);
  };

  const handleOrderCreatePress = async () => {
    try {
      await createOrder(selectedMenuItem?.id);
    } catch (error) {
      console.log(error);
    }

    setShowModal(false);
  };

  return (
    <Box bgColor="#8ecae6" h="100%">
      <StatusBar animated barStyle="dark-content" backgroundColor="white" />
      <Text
        fontWeight="bold"
        fontSize="2xl"
        color="white"
        textAlign="center"
        mt={4}>
        Check our menu
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack mt={4} space={4} alignItems="center">
          {vendor?.menu?.menuItems?.map(menuItem => (
            <Pressable
              _pressed={{
                opacity: 0.9,
              }}
              onPress={() => handleMenuItemPress(menuItem)}>
              <Center h="40px" w="160px" bgColor="white">
                {menuItem.name}
              </Center>
            </Pressable>
          ))}
        </VStack>
      </ScrollView>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Order item</Modal.Header>
          <Modal.Body>
            <Text mb={6} fontWeight="bold" fontSize={20}>
              {selectedMenuItem?.name}
            </Text>
            <Button
              mb={4}
              bgColor="#2a9d8f"
              color="white"
              onPress={handleOrderCreatePress}>
              <Text color="white">ORDER</Text>
            </Button>
            <Button bgColor="#e76f51">
              <Text color="white">CANCEL</Text>
            </Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};
