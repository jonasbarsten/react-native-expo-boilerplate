import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import MyScreen from "../components/MyScreen";
import MyText from "../components/MyText";
import MyButton from "../components/MyButton";

const Tweets = ({ navigation }) => (
  <MyScreen>
    <MyText>Tweets</MyText>
    <MyButton
      title="View tweet details"
      // If we use navigation.push instead of navigate, it will animate even if it is on the same route
      // And we will also get a back button to the same route since we now have two instances of the same
      // route in our navigation stack

      // Second argument passes params to route
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
    <Link />
  </MyScreen>
);

const Account = () => (
  <MyScreen>
    <MyText>Account</MyText>
  </MyScreen>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

function TabNavigationScreen(props) {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default TabNavigationScreen;
