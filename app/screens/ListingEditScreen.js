import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  MyForm,
  MyFormField,
  MySubmitButton,
  MyFormPicker,
  MyFormImagePicker,
} from "../components/forms";
import MyPickerItemCategory from "../components/MyPickerItemCategory";
import MyScreen from "../components/MyScreen";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at leat one image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "#fd9644", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#26de81", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "#45aaf2", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
];

function ListingEditScreen(props) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
  };

  return (
    <MyScreen style={styles.screen}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <MyForm
        initialValues={{
          title: "",
          // We do not want to see 0 in input field, so we set price to a string
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <MyFormImagePicker name="images" />
        <MyFormField maxLength={255} name="title" placeholder="Title" />
        <MyFormField
          keyboardType="numeric"
          maxLength={8} // 10000.00
          name="price"
          placeholder="Price"
          width={120}
        />
        <MyFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={MyPickerItemCategory}
          numberOfColumns={3}
        />
        <MyFormField
          maxLength={255}
          placeholder="Description"
          name="description"
          multiline
          // Only works on android: input box looks bigger
          // On iOS the box will look like one line, but will grow as we type
          numberOfLines={3}
        />
        <MySubmitButton title="Post" />
      </MyForm>
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 20 },
});

export default ListingEditScreen;
