import React, { useState , useContext } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/image/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingApi from '../api/listingApi';
import UploadScreen from "./uploadScreen";
import ListingContext from "../api/listingContext";


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();
    const [progress, setProgress] = useState(0);
    const [uploadVisible, setUploadVisible] = useState(false);
    const { loadListings } = useContext(ListingContext); // Get loadListings function from context

    const handleSubmit = async (listing, { resetForm }) => {
      setProgress(0);
      setUploadVisible(true);
    
      const result = await listingApi.addListingg(
        { ...listing, location },
        (progress) => {
          // only use this if actual progress tracking is possible
          if (progress > 0) setProgress(progress);
        }
      );
    
      if (!result.ok) {
        setUploadVisible(false);
        return alert("Could not save the listing");
      }
    
      // Manually simulate progress bar
      setProgress(0.5);
    
      setTimeout(() => {
        setProgress(1);
    
        // Give time for the "done" Lottie animation to appear and play
        setTimeout(() => {
          setUploadVisible(false);
          resetForm();
          // Refetch the listings from the context
        loadListings(); 
        }, 900); // Match your Lottie duration
      }, 500); // Delay between 0.5 and 1
    };
    
    


    


  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin:20
  },
});
export default ListingEditScreen;
