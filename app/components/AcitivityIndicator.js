import React from 'react';
import { View , StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

function AcitivityIndicator({visible = false}) {
    if (!visible) return null ; 
    return (
      <LottieView
      autoPlay
      loop
      
      source={require('../assets/animations/loader.json')}
      
      ></LottieView>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AcitivityIndicator;