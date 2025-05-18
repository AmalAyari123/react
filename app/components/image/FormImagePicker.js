import React from 'react';
import { useFormikContext } from 'formik';
import ImageInputList from './ImageInputList';
import ErrorMessage from '../ErrorMessage';

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name] || [];

  const handleAdd = (uri, index = null) => {
    if (!uri) {
      console.warn("❌ Tried to add an undefined uri");
      return;
    }
  
    const updatedUris = Array.isArray(imageUris) ? [...imageUris] : [];
  
    if (index !== null) {
      updatedUris[index] = uri;
    } else {
      updatedUris.push(uri);
    }
  
    console.log("✅ Updating imageUris to:", updatedUris);
    setFieldValue(name, updatedUris);
  };
  

  const handleRemove = (uri) => {
    setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri));
  };
  console.log("Image URIs:", imageUris);


  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
