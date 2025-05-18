import React from 'react';
import { StyleSheet , View , Image, TouchableHighlight  } from 'react-native';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";


function ListItem({title , subtitle , ImageComponent , image , onPress , renderRight }) {
    return (
        <Swipeable renderRightActions={renderRight}  >
        <TouchableHighlight 
        onPress={onPress}
        underlayColor="grey"
        >
       <View style={{flexDirection: "row" , padding:20  ,  backgroundColor: colors.white , alignItems:"center"}}>
        {ImageComponent}
        { image && <Image source={image} style={styles.imageStyle} ></Image>}
        <View style={{marginLeft : 10 , justifyContent: "center" , flex: 1}}>
            <AppText style={{fontWeight:"bold" , fontSize:18}}  numberOfLines={1} ellipsizeMode="tail">{title}</AppText>
           { subtitle && <AppText style={{color: "#6e6969"}} numberOfLine={1}>{subtitle}</AppText>}
        </View>
        <MaterialCommunityIcons name='chevron-right' size={25}></MaterialCommunityIcons>


       </View>
       </TouchableHighlight>
       </Swipeable>
    );
}
const styles = StyleSheet.create({
    imageStyle : {
        height:70,
        width:70,
        borderRadius:35,
        marginRight:5

    }

    
})

export default ListItem;