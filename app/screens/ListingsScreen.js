import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import routes from "../navigation/routes";
import listingsApi from "../api/listings";

import MyCard from "../components/MyCard";
import MyScreen from "../components/MyScreen";
import defaultStyles from "../config/styles";
import MyText from "../components/MyText";
import MyButton from "../components/MyButton";
import MyActivityIndicator from "../components/MyActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <MyScreen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <MyText>Could not retreive the listings ...</MyText>
          <MyButton title="Retry" onPress={getListingsApi.loadListings} />
        </>
      )}
      <MyActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <MyCard
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
