import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children, style , stylee}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[{flex: 1} , stylee]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    
  },
});

export default Screen;
