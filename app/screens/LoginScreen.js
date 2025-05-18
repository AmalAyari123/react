import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import AppFormField from './../components/AppFormField';
import SubmitButton from "../components/SubmitButton";
import { ErrorMessage } from "../components";
import AuthContext from './../auth/context';
import storage from "../auth/storage";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"), // the shown in error msg
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const authh = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await auth.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    authh.logIn(result.data);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >


        <ErrorMessage error="Invalid email or password" visible={loginFailed}></ErrorMessage>
        <AppFormField
          autoCapitalize="none"                 //the children prop
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin:20
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
