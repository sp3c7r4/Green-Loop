import { View, Text } from "react-native";
import React, { useState } from "react";
import AuthInputBoxes from "@/components/AuthInputBox";
import FontSize from "@/constants/FontSize";
import { Colors } from "@/constants/color";
import Header from "@/components/Header";

const signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  return (
    <View
      style={{
        backgroundColor: Colors.light.background,
        paddingHorizontal: 16,
      }}
    >
      <Header onPress={() => console.log("Pressed") }/>
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
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 10,
            width: "100%",
          }}
        >
          <AuthInputBoxes
            label="Firstname"
            onChangeText={(value) =>
              setFormData((prev) => ({ ...prev, firstname: value }))
            }
            placeholder="firstname"
          />
          {/* <AuthInputBoxes/> */}
          <AuthPasswordInputBox />
        </View>
        <View>
          {/* <AuthInputBoxes/>
          <AuthInputBoxes/> */}
        </View>
      </View>
    </View>
  );
};

export default signup;
