import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage'

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string; firstname: string; lastname: string } | null;
  login: (email: string, firstname: string, lastname: string) => void;
  logout: () => void;
  loginAuthState: () => void
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email, firstname, lastname) => {
    const user = { email, firstname, lastname };
    await AsyncStorage.setItem('authState', JSON.stringify({ isAuthenticated: true, user }));
    set({
      isAuthenticated: true,
      user,
    });
  },
  logout: async () => {
    await AsyncStorage.removeItem('authState');
    set({
      isAuthenticated: false,
      user: null,
    });
  },
  loginAuthState: async () => {
      const storedAuthState = await AsyncStorage.getItem('authState');
      console.log(storedAuthState)
      if (storedAuthState) {
        const { isAuthenticated, user } = JSON.parse(storedAuthState);
        set({
          isAuthenticated,
          user,
        });
      }
    },
}));

export default useAuthStore;