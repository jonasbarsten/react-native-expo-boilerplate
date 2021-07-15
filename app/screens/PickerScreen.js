import React, { useState } from "react";

import MyScreen from "../components/MyScreen";
import MyPicker from "../components/MyPicker";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

function PickerScreen(props) {
  const [category, setCategory] = useState(categories[0]);
  return (
    <MyScreen>
      <MyPicker
        placeholder="Blabla"
        icon="apps"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
    </MyScreen>
  );
}

export default PickerScreen;
