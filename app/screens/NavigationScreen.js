import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MyScreen from "../components/MyScreen";
import MyText from "../components/MyText";
import MyButton from "../components/MyButton";

const Link = () => {
  // navigation prop is only available on the top level of routes
  // so we use the hook other places
  const navigation = useNavigation();

  return (
    <MyButton
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  );
};

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

const TweetDetails = ({ route }) => (
  // If this component is not a route, use the "useRoute"
  // Just as we did on <Link>

  <MyScreen>
    <MyText>Tweet details {route.params.id}</MyText>
  </MyScreen>
);

const Stack = createStackNavigator();

const FeedNavigator = () => (
  // First component to load will be the top one unless we define an "initialRouteName"
  <Stack.Navigator
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue",
      },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="TweetDetails"
      options={({ route }) => ({
        title: route.params.id,
        headerTintColor: "white",
        headerShown: true,
        headerStyle: {
          backgroundColor: "tomato",
        },
      })}
      component={TweetDetails}
    />
    <Stack.Screen name="Tweets" component={Tweets} />
  </Stack.Navigator>
);

// TAB navigator

const Account = () => (
  <MyScreen>
    <MyText>Account</MyText>
  </MyScreen>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

function NavigationScreen(props) {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default NavigationScreen;
