import { Colors } from "@/constants/color";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import logo from '@/assets/images/logo_text.png'
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRedirect(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (shouldRedirect) {
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
      <Image source={logo} resizeMode="contain" style={{width: 250, height: 50}}/>
      <StatusBar style="auto"/>
    </View>
  );
}
