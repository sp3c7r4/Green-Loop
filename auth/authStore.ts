import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage'

interface AuthState {
  isAuthenticated: boolean;
  authToken: string | null,
  user: { email: string; firstname: string; lastname: string, id: string, mobile: string, type: string } | null;
  login: (email: string, id: string, mobile: string, type: string, token: string, firstname: string, lastname: string) => void;
  logout: () => void;
  loginAuthState: () => void
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  authToken: null,
  login: async (id, firstname, lastname, email, mobile, type, token) => {
    const user = { id, firstname, lastname, email, mobile, type };
    const authToken = token
    await AsyncStorage.setItem('authState', JSON.stringify({ authToken, isAuthenticated: true, user }));
    set({
      isAuthenticated: true,
      user,
      authToken
    });
  },
  logout: async () => {
    await AsyncStorage.removeItem('authState');
    set({
      isAuthenticated: false,
      user: null,
      authToken: null
    });
  },
  loginAuthState: async () => {
      const storedAuthState = await AsyncStorage.getItem('authState');
      console.log(storedAuthState)
      if (storedAuthState) {
        const { isAuthenticated, user, authToken } = JSON.parse(storedAuthState);
        set({
          isAuthenticated,
          user,
          authToken
        });
      }
    },
}));

export default useAuthStore;