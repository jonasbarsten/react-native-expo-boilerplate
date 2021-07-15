import React, { useState } from "react";

// Also see: SectionList
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/MyScreen";
import MyListItem from "../components/MyListItem";
import MyListItemSeparator from "../components/MyListItemSeparator";
import MyListItemDeleteAction from "../components/MyListItemDeleteAction";

const initMessages = [
  {
    id: 1,
    title:
      "Klknasdlkjasdlkjasdlkjasdlkjasdlkjasdlkjasd iojhasldin kasoinou asdoi asd oua sdoib asdou asdou",
    description:
      "lnasdlinaslin asinlkj aspdin o asdoi aos doia sdoi asdoihjaspihjpojpojapsojd apsopionkjjbefoihewpfoidnsboijdaslknjvfhuiojrfewlkmdsnkvbfhiojwelknadsvc oihjsdfpiojasdoijasd",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <MyListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <MyListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={MyListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
