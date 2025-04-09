import { Colors } from "@/constants/color";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import useAuthStore from "@/auth/authStore";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const { loginAuthState } = useAuthStore()

  useEffect(() => {
    loginAuthState()
    const timer = setTimeout( async () => {
      setShouldRedirect(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (shouldRedirect) {
    if(isAuthenticated) {
      return <Redirect href="/(tabs)/cart"/>
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
