import { View, Text, Modal, Alert } from "react-native";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import { Colors } from "@/constants/color";
import FontSize from "@/constants/FontSize";
import AuthInputBoxes from "@/components/AuthInputBox";
import { useState } from "react";
import AuthPasswordInputBoxes from "@/components/AuthPasswordInputBox";
import { router } from "expo-router";
import Button from "@/components/Button";
import { StatusBar } from "expo-status-bar";
import useAuthStore from "@/auth/authStore";
import TestAuthStore from "@/auth/test";

const dummyData = {
  data: {
    firstname: "spectra",
    lastname: "Gee",
    email: "sarafasatar@gmail.com",
    password: "000000"
  }
}

interface ResponseType {
  data: {
    email: string,
    password: string,
    firstname: string,
    lastname: string
  },
  success: boolean
}

const signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false)
    async function handlePress() {
      setLoading(true); // Set loading to true at the start
    
      try {
        const response: ResponseType = await new Promise((resolve, reject) => {
          setTimeout(() => {
            const getEmail = dummyData.data.email === formData.email;
            if (!getEmail) {
              reject({ success: false, data: "Invalid mail" });
            }
            const getPassword = dummyData.data.password === formData.password;
            if (!getPassword) {
              reject({ success: false, data: "Invalid Password" });
            }
            resolve({ success: true, data: dummyData.data });
          }, 3000);
        });
    
        console.log("Response received:", response);
        login(
          response.data.email,
          response.data.firstname,
          response.data.lastname
        ); // Update Zustand store with user data
        Alert.alert("Success", "You are now logged in!");
        router.replace("/(tabs)/home");
      } catch (error: any) {
        console.error("Error occurred:", error);
        Alert.alert("Error", error.data || "An error occurred");
      } finally {
        setLoading(false); // Ensure loading is set to false in all cases
        console.log("Loading state set to false");
      }
    }
  return (
    <View
      style={{
        backgroundColor: Colors.light.background,
        paddingHorizontal: 16,
      }}
    >
      <Header onPress={() => {router.navigate('/(onboarding)')}}/>
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
        <View style={{marginTop: 20}}>
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
        <View style={{marginVertical: 10}}>
          <Button onPress={handlePress} type="normal" color="#111111" buttonTextColor="#fff" title="Sign in"/>
        </View>
      </View>
        <Modal
          transparent={true}
          visible={loading}
          animationType="fade"
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18 }}>Loading...</Text>
          </View>
        </Modal>
        { loading ? 
        <TestAuthStore/>
        : ""}
      <StatusBar style="dark" backgroundColor={loading ? 'rgba(0, 0, 0, 0.5)' : "transparent"}/>
    </View>
  );
};

export default signin;
