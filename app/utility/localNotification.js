// https://docs.expo.io/versions/latest/sdk/notifications/#schedulenotificationasyncnotificationrequest-notificationrequestinput-promisestring

// Will figure this out later ...

/* import * as Notifications from "expo-notifications";

export const sendLocalNotification = async (title, body) => {
  console.log("BAM");
  console.log(title);

  const res = await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: {
      seconds: 1,
    },
  });

  console.log(res);
};

const scheduleLocalNotification = ({
  title,
  body,
  seconds,
  repeats = false,
}) => {
  Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: {
      seconds,
      repeats,
    },
  });
}; */

import * as Notifications from "expo-notifications";

export const send = () => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Time's up!",
      body: "Change sides!",
    },
    trigger: null,
  });
};
