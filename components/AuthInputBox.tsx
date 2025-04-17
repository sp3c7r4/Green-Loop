import { View, Text, TextInput } from "react-native";
import React from "react";
import FontSize from "@/constants/FontSize";
import { color } from "@/constants/color";

const AuthInputBox = ({
  label,
  onChangeText,
  onBlur,
  placeholder,
  value,
  disabled=false
}: {
  value: string;
  label: string;
  onChangeText: (value: string) => void;
  onBlur: () => void;
  placeholder: string;
  disabled?: boolean
}) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View>
        <Text
          style={{
            fontSize: FontSize.textbox_label_fbold,
            fontFamily: "Satoshi-Bold",
            marginVertical: 3,
          }}
        >
            {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
        </Text>
        <View
          style={{
            height: 55,
            backgroundColor: "#fff",
            borderRadius: 10,
            justifyContent: "center",
            paddingLeft: 10,
          }}
        >
          <TextInput
            onBlur={onBlur}
            editable={!disabled}
            onChangeText={onChangeText}
            value={disabled ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : value}
            placeholder={placeholder}
            style={{
              height: 40,
              color: disabled ? color.greensync.primary : "transparent",
              fontFamily: "Satoshi-Medium",
              borderBottomWidth: 0,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AuthInputBox;
