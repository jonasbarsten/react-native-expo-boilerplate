// https://www.youtube.com/watch?v=0-S5a0eXPoc

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import BordersScreen from "./app/screens/BordersScreen";
import ShadowsScreen from "./app/screens/ShadowsScreen";
import PaddingsAndMarginsScreen from "./app/screens/PaddingsAndMarginsScreen";
import StylingTextScreen from "./app/screens/StylingTextScreen";
import EncapsulatingStylesScreen from "./app/screens/EncapsulatingStylesScreen";
import IconsScreen from "./app/screens/IconsScreen";
import PlatformSpecificCodeScreen from "./app/screens/PlatformSpecificCodeScreen";
import CardsContainerScreen from "./app/screens/CardsContainerScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import TextInputScreen from "./app/screens/TextInputScreen";
import SwitchScreen from "./app/screens/SwitchScreen";
import PickerScreen from "./app/screens/PickerScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImagePickerScreen from "./app/screens/ImagePickerScreen";
import ImageInputScreen from "./app/screens/ImageInputScreen";
import ImageInputListScreen from "./app/screens/ImageInputListScreen";
import NavigationScreen from "./app/screens/NavigationScreen";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );

  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );

  return <ListingDetailsScreen />;
  return <NavigationScreen />;
  return <ListingEditScreen />;
  return <ImageInputListScreen />;
  return <ImageInputScreen />;
  return <ImagePickerScreen />;
  return <MessagesScreen />;
  return <LoginScreen />;
  return <PickerScreen />;
  return <SwitchScreen />;
  return <TextInputScreen />;
  return <BordersScreen />;
  return <ShadowsScreen />;
  return <StylingTextScreen />;
  return <PaddingsAndMarginsScreen />;
  return <EncapsulatingStylesScreen />;
  return <PlatformSpecificCodeScreen />;
  return <WelcomeScreen />;
  return <CardsContainerScreen />;
  return <ViewImageScreen />;
  return <IconsScreen />;
  return <AccountScreen />;
  return <ListingsScreen />;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Image
        style={{ width: "100%", flex: 12 }}
        source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 100,
          alignSelf: "center",
        }}
      >
        <Image
          source={{
            uri: "https://picsum.photos/100",
            width: 100,
            height: 100,
          }}
        />
        <Text>Hello, here is some text</Text>
      </View>

      <View style={{ backgroundColor: "gold", flex: 1 }} />
      <View style={{ backgroundColor: "blue", flex: 1 }} />
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
