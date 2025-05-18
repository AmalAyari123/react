
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack" ; 
import ListingScreens from '../screens/ListingScreens';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import CartScreen from '../screens/cartScreen';
import SubmitScreen from '../screens/submit';
const  Stack =  createStackNavigator();

const AccountNavigator = () => (

    <Stack.Navigator>
                <Stack.Screen name="Account" component={AccountScreen} options={{headerShown :false}} />

        <Stack.Screen name="Messages" component={MessagesScreen} options={{headerShown :false}} />
        <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown : false}} />
        <Stack.Screen name="Submit" component={SubmitScreen} options={{headerShown : false}} />




        

    </Stack.Navigator>



);
export default AccountNavigator;

