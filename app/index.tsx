import { Colors } from "@/constants/color";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import useAuthStore from "@/auth/authStore";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';

export default function Index() {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const { loginAuthState } = useAuthStore()

  useEffect(() => {
    loginAuthState()
    const timer = setTimeout( async () => {
      setShouldRedirect(true);
    }, 3000);
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need media library permissions to make this work!');
      }
    })();
    return () => clearTimeout(timer);
  }, []);

  if (shouldRedirect) {
    if(isAuthenticated) {
      return <Redirect href="/(tabs)/home"/>
    }
    return <Redirect href="/(onboarding)" />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.dark.background
      }}
    >
      <Image source={require('@/assets/images/logo_text.png')} resizeMode="contain" style={{width: 250, height: 50}}/>
      <StatusBar style="auto"/>
    </View>
  );
}
