import {RouteProp} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CardStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Text} from 'native-base';
import React, {FC} from 'react';

import {EventScreen} from '../screens/EventScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {QRCodeScannerScreen} from '../screens/QRCodeScannerScreen';
import {VendorScreen} from '../screens/VendorScreen';

export type MainStackParamList = {
  HomeScreen: any;
  EventScreen: IEventRouteProps;
  VendorScreen: IVendorRouteProps;
  ProfileScreen: any;
  QRCodeScannerScreen: any;
};

export type AuthStackParamList = {
  LoginScreen: any;
};

export interface IEventRouteProps {
  title: string;
  eventId: string;
}

export interface IVendorRouteProps {
  title: string;
  vendorId: string;
}

export type MainStackScreenProps<T extends keyof MainStackParamList> = {
  navigation: StackNavigationProp<MainStackParamList, T>;
  route: RouteProp<MainStackParamList, T>;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = {
  navigation: StackNavigationProp<AuthStackParamList, T>;
  route: RouteProp<AuthStackParamList, T>;
};

const MainStack = createStackNavigator<MainStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

export const MainStackNavigator: FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitle: props => (
          <Text
            {...props}
            fontWeight="bold"
            color="black"
            fontSize="xl"
            textAlign="center"
          />
        ),
      }}>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => null,
        }}
      />
      <MainStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={({route}) => ({
          title: route?.params?.title,
        })}
      />
      <MainStack.Screen
        name="VendorScreen"
        component={VendorScreen}
        options={({route}) => ({
          title: route?.params?.title,
        })}
      />
      <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <MainStack.Screen
        options={{
          header: () => null,
          presentation: 'modal',
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
        name="QRCodeScannerScreen"
        component={QRCodeScannerScreen}
      />
    </MainStack.Navigator>
  );
};

export const AuthStackNavigator: FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
