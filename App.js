  import React, { useCallback, useEffect, useState } from 'react';
  import { GestureHandlerRootView } from 'react-native-gesture-handler';
  import { NavigationContainer } from '@react-navigation/native';
  import * as SplashScreen from 'expo-splash-screen';
  import {jwtDecode} from 'jwt-decode';

  import AuthContext from './app/auth/context';
  import storage from './app/auth/storage';
  import AuthNavigation from './app/navigation/AuthNavigation';
  import AppNavigator from './app/navigation/AppNavigator';
  import navigationTheme from './app/navigation/navigationTheme';
  import OfflineNotice from './app/screens/OfflineNotice';
  import { ListingProvider } from './app/api/listingContext';
  import storageLanguage from './app/language/storageLanguage';
  import LanguageContext from './app/language/languageContext';
import { CartProvider } from './app/cart/cartContext';



  SplashScreen.preventAutoHideAsync();

  export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [user, setUser] = useState();
    const [language, setLanguage] = useState();

    useEffect(() => {
      async function prepare() {
        try {
          const token = await storage.getToken();
          const storedLanguage = await storageLanguage.getLanguage();
          if (storedLanguage) setLanguage(storedLanguage); // set it to state
          // get language


          if (token) {
            const decodedUser = jwtDecode(token);
            setUser(decodedUser);
          }
        } catch (e) {
          console.warn('Error restoring user:', e);
        } finally {
          setAppIsReady(true);
        }
      }

      prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    }, [appIsReady]);

    if (!appIsReady) {
      return null;
    }

    return (
      <AuthContext.Provider value={{ user, setUser }}>
            <LanguageContext.Provider value={{ language, setLanguage }}>
        <ListingProvider>
          <CartProvider>
          
          <OfflineNotice />
          <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigation />}
        </NavigationContainer>
          </GestureHandlerRootView>
          </CartProvider>     
             </ListingProvider>
        
      </LanguageContext.Provider>
      </AuthContext.Provider>
    );
  }
