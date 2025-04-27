import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Alert } from 'react-native';
import auction from '@/app/(tabs)/auction';

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string; firstname: string; lastname: string; id: string; mobile: string; type: string, token: string } | null;
  auctions: { data: object[] } | null;
  products: { data: object[] } | null
  login: (email: string, id: string, mobile: string, type: string, token: string, firstname: string, lastname: string, auction: object[], product: object[] ) => void;
  logout: () => void;
  loginAuthState: () => void;
  startTokenExpirationCheck: () => void; // Start global token expiration check
}

const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  user: null,
  auctions: null,
  products: null,
  login: async (id, firstname, lastname, email, mobile, type, token, auction, product) => {
    const user = { id, firstname, lastname, email, mobile, type, token };
    const auctions = { data: auction }
    const products = { data: product }
    console.log("SPECTRA: \n",auctions, products)
    const expiryTime = Date.now() + 25 * 60 * 1000; // Set expiry time to 25 minutes from now
    await AsyncStorage.setItem( 'authState', JSON.stringify({ isAuthenticated: true, user, expiryTime }) );
    await AsyncStorage.setItem('auctions', JSON.stringify({ auctions }))
    await AsyncStorage.setItem('products', JSON.stringify({ products }))
    set({
      isAuthenticated: true,
      user,
      auctions,
      products
    });
    Alert.alert("Success", "You are now logged in!");
    router.replace("/(tabs)/home")
  },

  logout: async () => {
    await AsyncStorage.removeItem('authState');
    set({
      isAuthenticated: false,
      user: null,
      auctions: null,
      products: null
    });
    router.replace("/(auth)/signin")
  },

  loginAuthState: async () => {
    const storedAuthState = await AsyncStorage.getItem('authState');
    const { products } = JSON.parse( await AsyncStorage.getItem('products') )
    const { auctions } = JSON.parse( await AsyncStorage.getItem('auctions') )
    console.log("Sp3c7r4: ",auctions, products)
    if (storedAuthState) {
      const { isAuthenticated, user, authToken, expiryTime } = JSON.parse(storedAuthState);
      const tokenExpired = Date.now() > expiryTime;
      console.log(Date.now(), expiryTime )
      set({
        isAuthenticated: tokenExpired ? false : true,
        user: tokenExpired ? null : user,
        auctions: tokenExpired ? null :  auctions,
        products: tokenExpired ? null : products,
      });
    }
  },

  startTokenExpirationCheck: () => {
    const interval = setInterval(async () => {
      console.log("Checking!!!")
      const storedAuthState = await AsyncStorage.getItem('authState');
      if (storedAuthState) {
        const { expiryTime } = JSON.parse(storedAuthState);
        console.log(expiryTime)
        const tokenExpired = Date.now() > expiryTime;
        console.log(Date.now() > expiryTime)

        if (tokenExpired) {
          console.log("TOKEN EXPIRED")
          await AsyncStorage.removeItem('authState');
          await AsyncStorage.removeItem('auctions');
          await AsyncStorage.removeItem('products');
          set({
            isAuthenticated: false,
            user: null,
            auctions: null,
            products: null
          });
          router.replace("/(auth)/signin")
        }
      }
    }, 10000); // Check every 5 seconds

    // Clear the interval when the app is closed or unmounted
    return () => clearInterval(interval);
  },
}));

export default useAuthStore;