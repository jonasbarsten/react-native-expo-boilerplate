import React from "react";
import { useFormikContext } from "formik";

import MyPicker from "../MyPicker";
import MyErrorMessage from "./MyErrorMessage";

function MyFormPicker({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberOfColumns,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <MyPicker
        width={width}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        numberOfColumns={numberOfColumns}
      />
      <MyErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default MyFormPicker;
