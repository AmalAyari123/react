import React from 'react';
import { Image , StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (
<View style={styles.container}>
    <View style={styles.closeIcon}>
    <MaterialCommunityIcons name="close" size={30} color="white" ></MaterialCommunityIcons>
    </View>
    <View style={styles.deleteIcon}>
    <MaterialCommunityIcons name="trash-can-outline" size={30} color="white"></MaterialCommunityIcons>
    </View>

<Image  resizeMode="contain"
style={styles.image} source={require("../assets/chair.jpg")}/>
</View>

    )
};

const styles = StyleSheet.create({
    image: {
        height:"100%" , 
        width:"100%"
        
    },

    closeIcon:{
        position: "absolute", // relative to its parent
        height:50,
        width:50,
        top:40,
        left: 30,



    },
    deleteIcon: {
        position: "absolute", // relative to its parent
        height:50,
        width:50,
        top:40,
        right: 30,



    },
    container: {
        backgroundColor: "#000",
        flex:1
    }
    
});
export default ViewImageScreen;
