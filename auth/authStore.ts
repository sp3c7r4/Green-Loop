import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Alert } from 'react-native';

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string; firstname: string; lastname: string; id: string; mobile: string; type: string, token: string } | null;
  login: (email: string, id: string, mobile: string, type: string, token: string, firstname: string, lastname: string ) => void;
  logout: () => void;
  loginAuthState: () => void;
  startTokenExpirationCheck: () => void; // Start global token expiration check
}

const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  user: null,

  login: async (id, firstname, lastname, email, mobile, type, token) => {
    const user = { id, firstname, lastname, email, mobile, type, token };
    const expiryTime = Date.now() + 25 * 60 * 1000; // Set expiry time to 25 minutes from now
    await AsyncStorage.setItem(
      'authState',
      JSON.stringify({ isAuthenticated: true, user, expiryTime })
    );
    set({
      isAuthenticated: true,
      user,
    });
    // Alert.alert("Success", "You are now logged in!");
    // router.replace("/(tabs)/home")
  },

  logout: async () => {
    await AsyncStorage.removeItem('authState');
    set({
      isAuthenticated: false,
      user: null,
    });
    router.replace("/(auth)/signin")
  },

  loginAuthState: async () => {
    const storedAuthState = await AsyncStorage.getItem('authState');
    if (storedAuthState) {
      const { isAuthenticated, user, authToken, expiryTime } = JSON.parse(storedAuthState);
      const tokenExpired = Date.now() > expiryTime;
      console.log(Date.now(), expiryTime )
      set({
        isAuthenticated: tokenExpired ? false : isAuthenticated,
        user: tokenExpired ? null : user,
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
          console.log("tokenExpired")
          // If the token has expired, log the user out
          await AsyncStorage.removeItem('authState');
          set({
            isAuthenticated: false,
            user: null
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