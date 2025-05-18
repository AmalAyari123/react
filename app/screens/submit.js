import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SubmitScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="check-circle" size={80} color="green" style={styles.icon} />
      <Text style={styles.title}>Order Confirmed!</Text>
      <Text style={styles.message}>Thank you for your purchase 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
  },
});
