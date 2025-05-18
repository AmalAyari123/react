import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import ListingEditScreen from "../screens/ListEditingScreen";
import useTranslation from "../language/translationHelper";

const Tab = createBottomTabNavigator();

const AppNavigator = () =>  {
  const { t } = useTranslation();

  return (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        title : t("appNavigator.feed"),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerShown: false, // Hide the header at the top

      }}

      
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        headerShown: false, // Hide the header at the top

        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate('ListingEdit')}
          />
        ),
       
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        title: t("appNavigator.account"),

        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        headerShown: false, // Hide the header at the top

      }}
    />
  </Tab.Navigator>
)};

export default AppNavigator;
