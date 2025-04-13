import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyProfileScreen from '../screens/AccountScreen'; // Your existing profile screen
import EditProfileScreen from '../screens/EditProfileScreen';
import ManageAddressesScreen from '../screens/ManageAddressesScreen';
import PaymentMethodsScreen from '../screens/PaymentMethodsScreen';

const Stack = createStackNavigator();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ManageAddresses" component={ManageAddressesScreen} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;