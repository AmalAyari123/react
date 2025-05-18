
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack" ; 
import ListingScreens from '../screens/ListingScreens';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import CartScreen from '../screens/cartScreen';
const  Stack =  createStackNavigator();

const FeedNavigator = () => (

    <Stack.Navigator  mode="modal" screenOptions={{headerShown : false}} >
                <Stack.Screen name="Listing" component={ListingScreens} />

        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{headerShown : false}} />
        <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown : false}} />



        

    </Stack.Navigator>



);
export default FeedNavigator;

