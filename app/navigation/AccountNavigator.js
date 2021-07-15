import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  // mode="modal" allows for pulling down to remove view
  // You have to start pulling pretty high up, so I decided to use card (default) instead
  // which allows for swiping back. Should maybe add back the header with back button as well
  <Stack.Navigator mode="card">
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
