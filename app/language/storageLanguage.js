// app/auth/languageStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const key = "language";

const storeLanguage = async (language) => {
  try {
    await AsyncStorage.setItem(key, language);
  } catch (error) {
    console.error("Error storing the language", error);
  }
};

const getLanguage = async () => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error("Error getting the language", error);
  }
};

export default {
  storeLanguage,
  getLanguage,
};
