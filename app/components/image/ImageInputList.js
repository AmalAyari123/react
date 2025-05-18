import React, { useRef } from 'react';
import { View , StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris = [] , onRemoveImage , onAddImage}) {
    const scrollview = useRef();
    { console.log("Rendering imageUris:", imageUris)};

        return (
            <View>
            <ScrollView  ref={scrollview} horizontal={true} onContentSizeChange={() => {scrollview.current.scrollToEnd();
            }}>
            <View style={styles.container}>

            {imageUris.map((uri, index) => (
  <ImageInput
    key={`${uri}-${index}`}
    imageUri={uri}
    onChangeImage={(uri) => onAddImage(uri, index)} // support replace
    onRemoveImage={() => onRemoveImage(uri)}
  />
))}

            
                <ImageInput onChangeImage={onAddImage}></ImageInput>

            </View>
            </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
flexDirection : "row", 


    },
    image: {
        marginRight:10,
     
    }
})

export default ImageInputList;