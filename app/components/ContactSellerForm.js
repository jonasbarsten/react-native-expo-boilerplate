import React from "react";
import { View, StyleSheet, Keyboard, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import { MyForm, MyFormField, MySubmitButton } from "./forms";
import messagesApi from "../api/messages";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert("Error", "Could not send the message");
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "Your message was sent to the seller.",
      },
      trigger: null,
    });
  };

  return (
    <View style={styles.container}>
      <MyForm
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={{ message: "" }}
      >
        <MyFormField
          maxLength={255}
          placeholder="Message ..."
          name="message"
          multiline
          // Only works on android: input box looks bigger
          // On iOS the box will look like one line, but will grow as we type
          numberOfLines={3}
        />
        <MySubmitButton title="Contact seller" />
      </MyForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ContactSellerForm;
