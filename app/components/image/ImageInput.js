import React  , {useEffect }from 'react';
import { View , StyleSheet, Image , TouchableWithoutFeedback, Alert  , TouchableOpacity} from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'

function ImageInput({imageUri , onChangeImage  , onRemoveImage}) {
      useEffect(() => {
        requestPermission();
      }, []);
      
      const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) alert("You need to enable permission to access the library.");
      };
    

      const handlePress = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5,
        });
      
        if (!result.canceled) {
          const uri = result.assets[0].uri;  // Get the URI from the result
          console.log('Selected image URI:', uri); 
          onChangeImage(uri);

        }
      };
      
    
      const handleDelete = (imageUri) => {
        Alert.alert(
          "Supprimer",
          "Êtes-vous sûr de vouloir supprimer cette image ?",
          [
            { text: "Annuler", style: "cancel" },
            { text: "Supprimer", style: "destructive", onPress: () => onRemoveImage(imageUri) }
          ]
        );
      };
          
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          {!imageUri ? (
            <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />
          ) : (
            <>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <TouchableOpacity style={styles.deleteIcon} onPress={() => handleDelete(imageUri)}>
              <MaterialCommunityIcons name="close-circle" size={24} color="red" />
            </TouchableOpacity>
          </>

          )}
        </View>
      </TouchableWithoutFeedback>
    
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        backgroundColor : colors.light , 
        borderRadius : 15 , 
        justifyContent: 'center' ,
        alignItems : 'center' , 
        height : 100 , 
        width : 100,
        overflow : "hidden"



    },
    deleteIcon: {
      position: "absolute",
      top: 5,
      right: 5,
      zIndex: 1,
    },
    image : {
      height:100 , 
      width : 100 
    }
})

export default ImageInput;