import React, { useState } from "react";
import { Switch } from "react-native";

import MyScreen from "../components/MyScreen";

function SwitchScreen(props) {
  const [isNew, setIsNew] = useState(false);
  return (
    <MyScreen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </MyScreen>
  );
}

export default SwitchScreen;
