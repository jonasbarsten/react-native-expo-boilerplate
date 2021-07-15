import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import defaultStyles from "../config/styles";
import MyText from "./MyText";

function MyListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <MyText style={styles.title} numberOfLines={1}>
              {title}
            </MyText>
            {subTitle && (
              <MyText style={styles.subTitle} umberOfLines={2}>
                {subTitle}
              </MyText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: defaultStyles.colors.medium,
  },
});

export default MyListItem;
