import React, { useContext, useState } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, Button } from "react-native";

import Icon from "../components/Icon";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import LanguageContext from "../language/languageContext";
import storageLanguage from "../language/storageLanguage";
import useTranslation from "../language/translationHelper";


function LanguagePicker() {
  const [modalVisible, setModalVisible] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext); // use context

  const handleSelectLanguage = async (selected) => {
    setLanguage(selected);
    await storageLanguage.storeLanguage(selected); // persist in storage
    setModalVisible(false);

  };
  const { t } = useTranslation();


  return (
    <>
      <ListItem
        title=  { t("account.select")}
        ImageComponent={
        <Icon name="email" backgroundColor="red" size={30}></Icon>}
        onPress={() => setModalVisible(true)}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Button title="Close" onPress={() => setModalVisible(false)} />

          <View style={styles.languageOptions}>
            <TouchableOpacity onPress={() => handleSelectLanguage("English")}>
              <AppText stylee={{ marginBottom: 10 }}>English</AppText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectLanguage("Français")}>
              <AppText>Français</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
  },
  languageOptions: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LanguagePicker;
