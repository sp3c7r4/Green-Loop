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
import env from "@/constants/env";
import useAxios from "@/util/useAxios";

interface ResponseType {
  data: {
    data: {
      user: {
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        id: string;
        mobile: string;
        type: string
      }
      token: string
    }, 
  };
  success: boolean;
}

const signin = () => {
  const {post, error, loading } = useAxios()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const { login } = useAuthStore();
  async function handlePress() {
    try {
      const res = await post(`${env.base_url}/user/login`, formData, {
        timeout: 5000,
      });
      console.log(res)

      if (res && res.data && res.data.data) {
        const { user, token, products, auctions } = res.data.data;
        console.log("TESTING: \n",auctions, products)
        login(
          user.id,
          user.firstname,
          user.lastname,
          user.email,
          user.mobile,
          user.type,
          token,
          user.auctions,
          user.products,
        );
      } else {
        Alert.alert("Error", "Invalid response from the server.");
      }
    } catch (err) {
      console.error("Login error:", err, formData);
      Alert.alert("Error", "Failed to log in. Please try again.");
    }
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: color.greensync.background,
        paddingHorizontal: 16,
        marginTop: 5,
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
        <Text style={{color: "red", marginVertical: 2}}>{error}</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
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
