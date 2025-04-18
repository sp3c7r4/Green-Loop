import { View, Text, Modal, Alert, FlatList, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import { color } from "@/constants/color";
import FontSize from "@/constants/FontSize";
import AuthInputBoxes from "@/components/AuthInputBox";
import { useState } from "react";
import AuthPasswordInputBoxes from "@/components/AuthPasswordInputBox";
import { useForm, Controller } from 'react-hook-form';
import { router } from "expo-router";
import Button from "@/components/Button";
import { StatusBar } from "expo-status-bar";
import useAuthStore from "@/auth/authStore";
import axios from 'axios'
import env from "@/constants/env";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from "react-native-safe-area-context";

const registerData = [
  { key: "firstname", label: "Firstname", placeholder: "E.g John" },
  { key: "lastname", label: "Lastname", placeholder: "E.g Doe" },
  { key: "email", label: "Email", placeholder: "E.g john@greenloop.com" },
  { key: "mobile", label: "Mobile", placeholder: "E.g 08165918482" },
  { key: "type", label: "Customer Type", placeholder: "E.g Regular" },
  { key: "password", label: "Password", placeholder: "Enter your password" },
  { key: "address", label: "Address", placeholder: "E.g 123 Main St" },
  { key: "state", label: "State", placeholder: "E.g Lagos" },
  { key: "lga", label: "Local government area", placeholder: "E.g Ikeja" },
  { key: "country", label: "Country", placeholder: "E.g Nigeria" },
];

function ConsentScreen({setRole}:{setRole: () => void}) {
  return (
    <View style={{flex:1,justifyContent: "center", alignItems: "center", backgroundColor: color.greensync.light_green}}>
      <Text style={{fontFamily: "Satoshi-Bold", fontWeight: "black", fontSize: 25, marginVertical: 10}}>Choose your role?</Text>
      <View style={{flexDirection: "row", justifyContent: "space-between",gap: 30, alignItems: "center"}}>
        <TouchableOpacity onPress={() => setRole("engineer")} style={{borderWidth: 2, width: "30%", borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", borderColor: "rgba(21, 232, 119, 0.5)", backgroundColor: "rgba(21, 232, 119, 0.2)"}}>
          <Text>Engineer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRole("recycler")} style={{borderWidth: 2, width: "30%", borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", borderColor: "rgba(21, 232, 119, 0.5)", backgroundColor: "rgba(21, 232, 119, 0.2)"}}>
          <Text>Recycler/Consumer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
} 

const signin = () => {
  const [userType, setUserType] = useState("")
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    type: userType,
    password: "",
    address: "",
    state: "",
    lga: "",
  });

  
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      type: "",
      password: "",
      address: "",
      state: "",
      lga: "",
      country: "",
    },
  });
  useEffect(() => {
    if (userType) {
      setValue("type", userType);
    }
    console.log(errors)
  }, [userType, errors]);

  async function onSubmit(data) {
    // setLoading(true);

    try {
      console.time("Register user")
      const response: ResponseType = await axios.post(`${env.base_url}/user/register`, data);
      console.timeEnd("Register user")
      console.log("Response received:", response.data);

      Alert.alert("Success", "Account created successfully!");
      router.replace("/(auth)/signin");
    } catch (error: any) {
      console.error("Error occurred:", JSON.stringify(error));
      Alert.alert("Error", error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
    const response = await axios.get(`http://172.20.10.3:3000/`)
    console.log(response.data)
    // console.log(errors)
  }
  if (!userType) {
    return <ConsentScreen setRole={setUserType} />;
  }

  return (
    <SafeAreaView
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
            marginBottom: 20
          }}
        >
          Enter your details to create a new account
        </Text>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ flex: 1}}>
            { registerData.map(item => (
          <Controller
            key={item.key}
            control={control}
            name={item.key}
            rules={item.key === "email"
              ? {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "Invalid email",
                  },
                }
              : item.key === "password"
              ? {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                }
              : registerData.map(data => data.key).includes(item.key)
                ? { required: "*" }
                : {}
            }
            render={({ field: { onChange, onBlur, value } }) => (
          <AuthInputBoxes
            onBlur={onBlur}
            disabled={item.key === "type"}
            value={value}
            label={item.label}
            placeholder={item.placeholder}
            onChangeText={onChange}
            error={errors[item.key]?.message}
                />
        )}
          />
              // <AuthInputBoxes
              // key={item.key}
              // disabled={ item.key === 'type' }
              // value={formData[item.key]}
              //     label={item.label}
              //     placeholder={item.placeholder}
              //     onChangeText={(value) =>
              //       setFormData((prev) => ({ ...prev, [item.key]: value }))
              //     }
              //   />
            ))}
          <View style={{ marginVertical: 10, marginBottom: 100 }}>
            <Button
              onPress={handleSubmit(onSubmit)}
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
    </SafeAreaView>
  )
};

export default signin;
