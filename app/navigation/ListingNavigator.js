
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack" ; 
import ListingScreens from '../screens/ListingScreens';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import CartScreen from '../screens/cartScreen';
const  Stack =  createStackNavigator();

const ListNavigator = () => (

    <Stack.Navigator  mode="modal" screenOptions={{headerShown : false}} >
                <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />

        <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown : false}} />


        

    </Stack.Navigator>



);
export default ListNavigator;

