import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import FontSize from "@/constants/FontSize";
import { color } from "@/constants/color";

function Hider({ onPress, state }: { onPress: () => void; state: boolean }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginRight: 10,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontFamily: "Satoshi-Medium", opacity: 0.2 }}>
        {state ? "Hide" : "Show"}
      </Text>
    </Pressable>
  );
}

const AuthPasswordInputBoxes = ({
  label,
  onChangeText,
  placeholder,
  value,
}: {
  value: string;
  label: string;
  onChangeText: (value: string) => void;
  placeholder: string;
}) => {
  const [visible, setVisible] = useState(false); // Use useState for reactivity

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
          {label}
        </Text>
        <View
          style={{
            height: 55,
            backgroundColor: "#fff",
            borderRadius: 10,
            alignItems: "center",
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            secureTextEntry={!visible} // Toggle secureTextEntry based on state
            onChangeText={onChangeText}
            placeholder={placeholder}
            value={value}
            style={{ height: 40, fontFamily: "Satoshi-Medium", flex: 1 }}
          />
          <Hider onPress={() => setVisible(!visible)} state={visible} />
        </View>
      </View>
    </View>
  );
};

export default AuthPasswordInputBoxes;
