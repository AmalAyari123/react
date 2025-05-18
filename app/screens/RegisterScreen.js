import React , {useState , useContext} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import {
  ErrorMessage,
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton,
  } from "../components";
import users from "../api/users";
import auth from "../api/auth";

import AcitivityIndicator from "../components/AcitivityIndicator";
import useAuth from "../auth/useAuth";
import AuthContext from "../auth/context";
  

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const { logIn } = useAuth(); // ✅ Call hook here

  const authContext = useContext(AuthContext); // it retuns an obj the same as we passed in App

 
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    console.log("Submitting user info:", userInfo); // Add this line

    const result = await users.register(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await auth.login(
      userInfo.email,
      userInfo.password
    );
    logIn(authToken); // ✅ Use the extracted function

     
  };
  return (
    <>

    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error}></ErrorMessage>

        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : 60,
    margin:20
  },
});

export default RegisterScreen;
