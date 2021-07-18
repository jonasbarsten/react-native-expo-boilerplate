// https://www.youtube.com/watch?v=0-S5a0eXPoc

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

/* import WelcomeScreen from "./app/screens/WelcomeScreen";
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
import NavigationScreen from "./app/screens/NavigationScreen"; */

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

import navigationTheme from "./app/navigation/navigationTheme";
import MyOfflineNotice from "./app/components/MyOfflineNotice";
import AuthContext from "./app/auth/context";

import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  // We show native loading screen while app gets ready
  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("Could not load app")}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <MyOfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );

  /*   return <ListingDetailsScreen />;
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
  return <ListingsScreen />; */
}
