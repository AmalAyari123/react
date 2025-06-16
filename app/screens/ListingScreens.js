import React, { useEffect, useState , useContext } from 'react';
import { FlatList, SafeAreaView , StyleSheet , Platform  , View} from 'react-native';
import Card from '../components/Card';
import colors from '../config/colors';
import AppText from '../components/AppText';
import Button from '../components/Button';
import AcitivityIndicator from '../components/AcitivityIndicator';
import useApi from '../hooks/useApi';
import listingApi from '../api/listingApi';
import ListingContext from '../api/listingContext';
import { StatusBar } from 'react-native';


function ListingScreens({navigation}) { //a screen registered in our navigator so we have access to navigation prop
   
    const { listings, loading, error, loadListings } = useContext(ListingContext);

    useEffect(() => {
      loadListings();
    }, []);
   
    return (
             <SafeAreaView style={styles.screen} >
                <View style={{padding:20}}>
                {error && <>
                    
                    <AppText>Couldn't retrieve the listings</AppText>
                    <Button title="Retry" onPress= {loadListings}></Button>
                    
                    </>}
                    {console.log(error)}
                  
                    <AcitivityIndicator visible={loading}></AcitivityIndicator>
                <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>

                    <Card   
                    
                    title={item.title}
                    
                    subTitle={"$" + item.price}
                    imageUrl = {item.images[0].url} // it's an array of objects
                    onPress={() => navigation.navigate("ListingDetails" , item)} 
                    thumnaiUrl={item.images[0].thumnaiUrl}

                    
                    >

                    </Card>
            
            
            
            
            }
                
                
                >

                </FlatList>

</View>

             </SafeAreaView>
       
    );
}
const styles = StyleSheet.create({
    screen : {
        paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex : 1,
        backgroundColor : colors.light
    }
    
})

export default ListingScreens;