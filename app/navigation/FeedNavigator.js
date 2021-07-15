import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  // mode="modal" allows for pulling down to remove view
  // You have to start pulling pretty high up, so I decided to use card (default) instead
  // which allows for swiping back. Should maybe add back the header with back button as well
  <Stack.Navigator mode="card" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
