import React from "react";
import { FlatList, StyleSheet } from "react-native";

import MyCard from "../components/MyCard";
import MyScreen from "../components/MyScreen";
import defaultStyles from "../config/styles";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: "100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: "1000",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <MyScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <MyCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: defaultStyles.colors.light,
  },
});

export default ListingsScreen;
