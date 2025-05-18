import React, { useContext } from 'react';
import { View , StyleSheet,Platform , SafeAreaView , Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {AppLoading} from 'expo' ;
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import Icon from './../components/Icon';
import ListItemSeparator from '../components/ListItemSeperator';
import AuthContext from '../auth/context';
import storage from '../auth/storage';
import LanguagePicker from './languageChange';
import useTranslation from "../language/translationHelper";
import CartContext from '../cart/cartContext';

function AccountScreen({navigation}) {
   const {user , setUser} =  useContext(AuthContext); 
   const { cartItems } = useContext(CartContext); // ← this depends on your app
const cartItemCount = cartItems.length;
//destructure obj
   const handleLogOut = () => {
    setUser(null);
    storage.removeToken();
   }
   const { t } = useTranslation();


    const menuItems = [
        {
            title : t("account.listings"), 
            icon : {
                name : "format-list-bulleted" , 
                backgroundColor : colors.primary
            }
        },

        {
            title :  t("account.myMessages") , 
            icon : {
                name : "email" , 
                backgroundColor : colors.secondary
            },
              targetScreen : "Messages"
        },
      





    ]

    return (
        <SafeAreaView style={styles.screen}>
            <View style={{marginVertical:10}}>

<ListItem
            image={require("../assets/logo-red.png")}
            title={user.name}
            subtitle={user.email}
            
            />
            </View>

            <View style={{marginVertical:10}}>
                <FlatList
                
                data={menuItems} 
                keyExtractor={menuItem => menuItem.title}
                ItemSeparatorComponent={<ListItemSeparator/>}
                renderItem={({item}) =>
                    <ListItem
                onPress={() => navigation.navigate(item.targetScreen)}

                    
                    title={item.title}
                    ImageComponent={
                       <Icon name={item.icon.name}
                       
                       backgroundColorr={item.icon.backgroundColor}
                       size={30}
                       
                       ></Icon> 
                    }
                    
                    
                    >




                    </ListItem>
                    



                }
                
                
                
                
                >

                </FlatList>
                <ListItem
  onPress={() => navigation.navigate("CartScreen")}
  title="My cart"
  ImageComponent={
    <View style={styles.badgeContainer}>
      <Icon
        name="email"
        backgroundColorr="red"
        size={30}
      />
      {cartItemCount > 0 && (
        <Text style={styles.badge}>{cartItemCount}</Text>
      )}
    </View>
  }
/>


                <LanguagePicker></LanguagePicker>
           



            </View>


          <ListItem
          title= { t("account.logOut")}
          
          onPress={handleLogOut}

          
          ImageComponent={
          
          
          
          <Icon name="logout"
            size={30}
          
          backgroundColorr= "#ffe66d"

          ></Icon>}
          
          
          >

          </ListItem>

            </SafeAreaView>

       
    );
}
const styles = StyleSheet.create({
    screen : {
        paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex : 1,
        backgroundColor : colors.light
    },
    badge: {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        paddingHorizontal: 5,
        textAlign: 'center',
        fontSize: 12,
        overflow: 'hidden',
        position: 'absolute',
        top: -5,
        right: -10,
      },
      badgeContainer: {
        position: 'relative',
        marginRight: 15,
      },
      
    
})

export default AccountScreen;