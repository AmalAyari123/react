import React from 'react';
import { View , StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons  name='plus-circle'  size={30} color={colors.white}></MaterialCommunityIcons>


        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height : 80 ,
        width : 80 , 
        borderRadius : 40 ,
        bottom : 30 , 
        borderColor : colors.white , 
        borderWidth : 10 , 
        justifyContent : 'center' , 
        alignSelf : "center",
        alignItems: 'center'

    }
})

export default NewListingButton;