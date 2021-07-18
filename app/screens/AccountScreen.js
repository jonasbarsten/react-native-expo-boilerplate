import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import MyListItem from "../components/MyListItem";
import MyIcon from "../components/MyIcon";
import MyScreen from "../components/MyScreen";
import defaultStyles from "../config/styles";
import MyListItemSeparator from "../components/MyListItemSeparator";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: defaultStyles.colors.primary,
    },
  },
  {
    title: "My messages",
    icon: { name: "email", backgroundColor: defaultStyles.colors.secondary },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <MyScreen style={styles.screen}>
      <View style={styles.container}>
        <MyListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
          style={{ backgroundColor: defaultStyles.colors.white }}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={MyListItemSeparator}
          renderItem={({ item }) => (
            <MyListItem
              title={item.title}
              style={{ backgroundColor: defaultStyles.colors.white }}
              onPress={() => navigation.navigate(item.targetScreen)}
              IconComponent={
                <MyIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <MyListItem
        title="Log out"
        style={{ backgroundColor: defaultStyles.colors.white }}
        onPress={handleLogout}
        IconComponent={
          <MyIcon name="logout" backgroundColor={defaultStyles.colors.yellow} />
        }
      />
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
});

export default AccountScreen;
