import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { color } from "@/constants/color";
import * as ImagePicker from "expo-image-picker";

function TextInputBox({
  placeholder,
  title,
}: {
  placeholder: string;
  title: string;
}) {
  return (
    <View style={{ gap: 4 }}>
      <Text
        style={{ fontSize: 10, fontFamily: "Satoshi-Medium", color: "#000" }}
      >
        {title}
      </Text>
      <View
        style={{
          backgroundColor: "#fff",
          height: 35,
          width: "100%",
          borderRadius: 8,
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <TextInput
          placeholder={placeholder}
          style={{ height: "100%", width: "100%", flex: 1, color: "#000" }}
        />
      </View>
    </View>
  );
}

const AddCatalogueItem = () => {
  const [image, setImage] = useState<string | null>(null);

  async function pickImage() {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    console.log(image);
  }
  return (
    <View style={{ flex: 1, marginVertical: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 150,
        }}
      >
        <View style={{ width: "48%", justifyContent: "space-between", gap: 4 }}>
          <TextInputBox placeholder="Name" title="Product's name" />
          <TextInputBox placeholder="Address" title="Product's location" />
        </View>
        <View style={{ width: "48%" }}>
          <Pressable
            onPress={pickImage}
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(60, 199, 136, 0.1)",
              borderRadius: 10,
              borderColor: "#3cc788",
              borderWidth: 1,
            }}
          >
            {image ? (
              <View
                style={{
                  position: "relative",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(60, 199, 136, 0.1)",
                    zIndex: 2,
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@/assets/images/edit.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <ImageBackground
                  source={{ uri: image }}
                  style={{
                    zIndex: 1,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("@/assets/images/picture.png")}
                  style={{ width: 50, height: 50 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Satoshi-Medium",
                    color: "#3cc788",
                    textAlign: "center",
                  }}
                >
                  Tap to select an image to upload
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#fff",
          marginVertical: 10,
          borderRadius: 8,
          flex: 1,
          height: 110,
        }}
      >
        <TextInput
          placeholder="product's details"
          style={{ width: "100%", flex: 1 }}
          multiline={true}
          textAlignVertical="top"
        />
      </View>
    </View>
  );
};

export default AddCatalogueItem;
