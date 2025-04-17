import { View, Text, Modal, Alert, FlatList, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
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
import axios from 'axios'
import env from "@/constants/env";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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

const registerData = [
  { key: "firstname", label: "Firstname", placeholder: "E.g John" },
  { key: "lastname", label: "Lastname", placeholder: "E.g Doe" },
  { key: "email", label: "Email", placeholder: "E.g john@greenloop.com" },
  { key: "mobile", label: "Mobile", placeholder: "E.g 08165918482" },
  { key: "type", label: "Customer Type", placeholder: "E.g Regular" },
  { key: "password", label: "Password", placeholder: "Enter your password" },
  { key: "address", label: "Address", placeholder: "E.g 123 Main St" },
  { key: "state", label: "State", placeholder: "E.g Lagos" },
  { key: "lga", label: "Local government area", placeholder: "E.g Ikeja" }
];

function ConsentScreen() {
  return (
    <View style={{flex:1,justifyContent: "center", alignItems: "center", backgroundColor: color.greensync.light_green}}>
      <View style={{borderWidth: 2, backgroundColor: "rgba()"}}>

      </View>
    </View>
  )
} 

const signin = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    type: "",
    password: "",
    address: "",
    state: "",
    lga: "",
  });
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);

  async function handlePress() {
    setLoading(true);

    try {
      const response: ResponseType = await axios.post(`${env.base_url}/user/register`, formData);
      console.log("Response received:", response.data);

      Alert.alert("Success", "Account created successfully!");
      router.replace("/(tabs)/home");
    } catch (error: any) {
      console.error("Error occurred:", JSON.stringify(error));
      Alert.alert("Error", error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View
      style={{
        backgroundColor: color.light.background,
        paddingHorizontal: 16,
        flex: 1,
      }}
    >
      <Header
        onPress={() => {
          router.navigate("/(onboarding)");
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: FontSize.heading_two_fblack,
            fontFamily: "Satoshi-Bold",
          }}
        >
          Get Started
        </Text>
        <Text
          style={{
            fontSize: FontSize.paragraph_fmedium,
            fontFamily: "Satoshi-Medium",
            opacity: 0.2,
          }}
        >
          Enter your details to create a new account
        </Text>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            { registerData.map(item => (
              <AuthInputBoxes
              value={formData[item.key]}
                  label={item.label}
                  placeholder={item.placeholder}
                  onChangeText={(value) =>
                    setFormData((prev) => ({ ...prev, [item.key]: value }))
                  }
                />
            ))}
          <View style={{ marginVertical: 10 }}>
            <Button
              onPress={handlePress}
              type="normal"
              color="#111111"
              buttonTextColor="#fff"
              title={loading ? "Loading..." : "Sign Up"}
            />
          </View>
        </KeyboardAwareScrollView>

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
    </View>
  );
};

// export default signin;

export default signin;
