import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { color } from "@/constants/color";
import * as ImagePicker from "expo-image-picker";
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';


function SmallButtons({text, onPress}) {
  return  (
    <TouchableOpacity onPress={onPress} style={{borderRadius: 8, height: 35, backgroundColor: color.light.primary, width: "100%", borderWidth: 1, flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

function formatDate(date: Date) {
  return date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2, '0') + "/" + date.getFullYear();
}

function formatTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = (hours % 12 || 12).toString(); // Convert 0 to 12 for 12-hour format
  return `${formattedHours}${minutes !== '00' ? ':' + minutes : ''}${period}`;
}



function TextInputBox({placeholder,title,onChangeText}: {placeholder: string;title: string;}) {
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
        onChangeText={onChangeText}
          placeholder={placeholder}
          style={{ height: "100%", width: "100%", flex: 1, color: "#000" }}
          />
      </View>
    </View>
  );
}

const AddCatalogueItem = ({formData, setFormData, state}) => {
  const [image, setImage] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());

  if(state) {
    console.log("Hello")
    setImage("")
  }
  const showMode = (currentMode: string) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  
  const showDatepicker = () => {
    showMode('date');
  };
  
  const showTimepicker = () => {
    showMode('time');
  };
  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setFormData({...formData, image: { uri: result.assets[0].uri, name: result.assets[0].fileName, mimeType: result.assets[0].mimeType}})
    }

    console.log(image);
  }
  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setFormData({...formData, expiry_time: currentDate})
  };

  return (
    <ScrollView scrollsToTop={true} style={{ flex: 1, marginVertical: 10 }}>
      <View style={{marginBottom: 10, flexDirection: "row", alignItems: "flex-end", gap: 10}}>
        <Image source={require("@/assets/images/create_auction.png")} resizeMode="contain" style={{width: 50, height: 50}}/>
        <View>
            <Text style={{ fontSize: 16, fontFamily: "Satoshi-Bold", color: "#000" }}>
            Create Auction Item
            </Text>
            <Text style={{ fontSize: 12, fontFamily: "Satoshi-Regular", color: "#555" }}>
            Fill in the details below to list your product for auction.
            </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1
        }}
      >
        <View style={{ width: "48%", justifyContent: "space-between", gap: 4 }}>
          <TextInputBox placeholder="Name" title="Product's name" onChangeText={(value: string) => setFormData({...formData, name: value})}/>
          <TextInputBox placeholder="Brand" title="Product's brand" onChangeText={(value: string) => setFormData({...formData, brand: value})}/>
          <TextInputBox placeholder="Issue" title="Product's issue" onChangeText={(value: string) => setFormData({...formData, issue: value})}/>
          <TextInputBox placeholder="Condition" title="Product's condition" onChangeText={(value: string) => setFormData({...formData, condition: value})}/>
          <TextInputBox placeholder="Address" title="Product's location" onChangeText={(value: string) => setFormData({...formData, address: value})}/>
          <View>
          <Text style={{marginBottom: 3, fontSize: 10, fontFamily: "Satoshi-Medium", color: "#000" }} >Date and Bid Expiry time</Text>
            <View style={{flexDirection: "row", flex: 1, gap: 5}}>
              <SmallButtons 
              text={date ? `${formatDate(date)}` : "Date" } 
              onPress={showDatepicker}
              />
              <SmallButtons text={date ? `${formatTime(date)}` : "Time"} onPress={showTimepicker}/>
            </View>
          </View>
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
          onChangeText={(value: string) => setFormData({...formData, about: value})}
        />
      </View>
    </ScrollView>
  );
};

export default AddCatalogueItem;
