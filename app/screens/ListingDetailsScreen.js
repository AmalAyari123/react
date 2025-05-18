import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions  , TouchableOpacity , Text} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import AuthContext from '../auth/context';
import CartContext from '../cart/cartContext';
import { SubmitButton } from '../components';



const { width } = Dimensions.get('window');

function ListingDetailsScreen({ route  , navigation}) {
  const listing = route.params;
  const { user } = useContext(AuthContext);
  
  
  
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);



  return (
    <View>
      {/* Swiper for images */}

      <SwiperFlatList
       autoplayDelay={2}
       autoplayLoop
        showPagination
        
        paginationStyleItem={{ width: 8, height: 8 }}
        data={listing.images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              uri={item.url}
              preview={{ uri: item.thumbnailUrl }}
              tint="light"
            />
          </View>
        )}



        
      />
      

      <View style={styles.detailsContainer}>
        <AppText stylee={{ fontWeight: 'bold', fontSize: 25 }}>
          {listing.title}
        </AppText>
        <AppText stylee={{ color: colors.secondary, marginVertical: 10 }}>
          ${listing.price}
        </AppText>
        <ListItem
          image={require('../assets/logo-red.png')}
          title={user.name}
          subtitle={user.email}
        />
      </View>
      <View style={{backgroundColor: colors.primary , margin : 40 , borderRadius:20}}>
      <TouchableOpacity
  style={{
    backgroundColor: '#fc5c65',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  }}
  onPress={() => {
    addToCart({ ...listing, quantity: 1 });
    navigation.navigate("CartScreen");
  }}
>
  <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
    Add to cart
  </Text>
</TouchableOpacity>
      </View>
      
   
  
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: width,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    padding: 10,
  },
});

export default ListingDetailsScreen;
