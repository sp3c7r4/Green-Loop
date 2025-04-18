import { View, Text, Modal, Alert } from "react-native";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import { color } from "@/constants/color";
import FontSize from "@/constants/FontSize";
import AuthInputBoxes from "@/components/AuthInputBox";
import { useState } from "react";
import AuthPasswordInputBoxes from "@/components/AuthPasswordInputBox";
import { router } from "expo-router";
import Button from "@/components/Button";
import { StatusBar } from "expo-status-bar";
import useAuthStore from "@/auth/authStore";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import env from "@/constants/env";

const dummyData = {
  data: {
    firstname: "spectra",
    lastname: "Gee",
    email: "sarafasatar@gmail.com",
    password: "000000",
  },
};

interface ResponseType {
  data: {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
  };
  success: boolean;
}

const signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);
  async function handlePress() {
    setLoading(true); // Set loading to true at the start

    try {
      const response: ResponseType = await axios.post(`${env.base_url}/user/login`, formData);

      const {user, token} = response.data.data;
      login(
        user.id,
        user.firstname,
        user.lastname,
        user.email,
        user.mobile,
        user.type,
        token,
      ); // Update Zustand store with user data
      Alert.alert("Success", "You are now logged in!");
      // router.replace("/(tabs)/home");
    } catch (error: any) {
      console.error("Error occurred:", error);
      Alert.alert("Error", error.data || "An error occurred");
    } finally {
      setLoading(false); // Ensure loading is set to false in all cases
      console.log("Loading state set to false");
    }
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: color.greensync.background,
        paddingHorizontal: 16,
        flex: 1,
      }}
    >
      <Header
        onPress={() => {
          router.navigate("/(onboarding)");
        }}
      />
      <View>
        <Text
          style={{
            fontSize: FontSize.heading_two_fblack,
            fontFamily: "Satoshi-Bold",
          }}
        >
          Let's sign you in
        </Text>
        <Text
          style={{
            fontSize: FontSize.paragraph_fmedium,
            fontFamily: "Satoshi-Medium",
            opacity: 0.2,
          }}
        >
          Enter your details in order to sign-in
        </Text>
        <View style={{ marginTop: 20 }}>
          <AuthInputBoxes
            value={formData.email}
            label="Email"
            placeholder="john@greenloop.com"
            onChangeText={(value) =>
              setFormData((prev) => ({ ...prev, email: value }))
            }
          />
          <AuthPasswordInputBoxes
            value={formData.password}
            label="Password"
            placeholder="john@doe.com"
            onChangeText={(value) =>
              setFormData((prev) => ({ ...prev, password: value }))
            }
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={handlePress}
            type="normal"
            color="#111111"
            buttonTextColor="#fff"
            title="Sign in"
          />
        </View>
      </View>
      <Modal transparent={true} visible={loading} animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Loading...</Text>
        </View>
      </Modal>
      <StatusBar
        style="dark"
        backgroundColor={loading ? "rgba(0, 0, 0, 0.5)" : "transparent"}
      />
    </SafeAreaView>
  );
};

export default signin;
