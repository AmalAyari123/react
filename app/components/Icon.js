import React from 'react';
import { View , StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'



function Icon({
    name , 
    size , 
    iconColor = "white" , 
    backgroundColorr
}) {
    return (
    <View
    style={{height : size , 
        width :  size, 
        borderRadius : size /2 ,
        backgroundColor : backgroundColorr , 
        justifyContent:"center",
        alignItems : "center",

    
      
    }}

    
    
    >
        <MaterialCommunityIcons color={iconColor}
        name ={name}
        size = {size * 0.5}
        
        ></MaterialCommunityIcons>

    </View>
    );
}


export default Icon;