import {
  View,
  Text,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useRef, useMemo } from "react";
import { color } from "@/constants/color";
import CartContainer from "@/components/CartContainer";
import SmallSearchBox from "@/components/SmallSearchBox";
import Button from "@/components/Button";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import AddCatalogueItem from "@/components/AddCatalogueItem";
import useAxios from "@/util/useAxios";
import env from "@/constants/env";
import useAuthStore from "@/auth/authStore";
// Aint gat no choice than adding a comment
interface DataProps {
  id: number;
  name: string;
  date: string;
  time: string;
  address: string;
  image: string;
  content: string;
}
const convertToFormData = (data: any) => {
  console.log(data)
  const form = new FormData();

  Object.keys(data).forEach((key) => {
    if (key === "image" && data[key]?.uri) {
      // Append the image as a file
      form.append("image", {
        uri: data[key].uri,
        name: data[key].name || "image.jpg",
        type: data[key].mimeType || "image/jpeg",
      });
    } else {
      // Append other fields
      form.append(key, data[key]);
    }
  });

  return form;
};

const renderBackdrop = (props: any) => {
  <BottomSheetBackdrop
  {...props}
  disappearsOnIndex={-1} // Backdrop disappears when the sheet is closed
  appearsOnIndex={0} // Backdrop appears when the sheet is open
  opacity={0.2} // Adjust the opacity of the backdrop
  enableTouchThrough={false} // Prevent touches from passing through the backdrop
  style={{ backgroundColor: "#000" }} // Set the overlay color
  />
}

const snapPoints = ["90%", "90%"]

const onPressDelete = (id: number, cb:(value:any) => void): void => {
  cb((prev) => {
    const filter = prev.filter((item) => item.id !== id);
    return filter;
  });
}

const catalogue = () => {
  const { post, get, error } = useAxios()
  const {user} = useAuthStore()
  const [clearImg, setClearImage] = useState(false)
  const [catalogueItems, setCatalogueItems] = useState<DataProps[]>([]);
  const sheetRef = useRef<BottomSheet>(null);
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    brand: "",
    issue: "",
    condition: "",
    address: "",
    image: {
      name: "",
      mimeType: "",
      uri: ""
    }
    })

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const openBottomSheet = useCallback((index: any) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const closeBottomSheet = useCallback(() => {
    sheetRef.current?.close();
    setFormData({ 
      name: "",
      about: "",
      brand: "",
      issue: "",
      condition: "",
      address: "",
      image: {
        name: "",
        mimeType: "",
        uri: ""
      },
    })
    setClearImage(true)
  }, []);

  const [searchText, setSearchText] = useState("");
  

  const onPressRequest = (id: number): void => {
    console.log(id);
  };
  async function handleSubmitAuction () {
    try {
      const transformedData = convertToFormData(formData);
      console.log("Transformed Data:", transformedData);
  
      const res = await post(`${env.base_url}/product/create`, transformedData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${user?.token}`
        }
      });
  
      if (res && res.data && res.data.data) {
        console.log("SP3C7R4 TESTING: ", res.data);
        Alert.alert("Success", "Item added successfully!");
      } else {
        Alert.alert("Error", "Invalid response from the server.");
      }
    } catch (error) {
      // console.error("Error submitting auction:", JSON.stringify(error));
      Alert.alert("Error", "Failed to add the item. Please try again.");
    }
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: color.greensync.background, paddingHorizontal: 16 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <View>
            <Text
              style={{
                color: "#000",
                fontFamily: "Satoshi-Bold",
                fontSize: 17,
              }}
            >
              Welcome to{" "}
              <Text style={{ color: color.light.primary }}>Catalogue</Text>
            </Text>
            <Text
              style={{
                color: "#000",
                fontFamily: "Satoshi-Medium",
                fontSize: 8,
              }}
            >
              {" "}
              Easily review and manage your items here.{" "}
            </Text>
          </View>
          <SmallSearchBox
            onChangeText={(value) => setSearchText(value)}
            value={searchText}
            onPress={() => console.log(searchText)}
          />
        </View>
        <View>
          {catalogueItems.length > 0 ? (
            <FlatList
              ListFooterComponent={<View style={{ height: 50 }} />}
              ListHeaderComponent={<View style={{ height: 10 }} />}
              data={catalogueItems}
              keyExtractor={(item) => item?.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 20,
              }}
              renderItem={({ item }) => (
                <CartContainer
                  data={item}
                  onPressDelete={() => onPressDelete(item.id, setCatalogueItems)}
                  onPressRequest={() => onPressRequest(item.id)}
                />
              )}
            />
          ) : (
            <View style={{ marginVertical: 15 }}>
              <Button
                type="normal"
                title="Add Your First Item"
                onPress={() => openBottomSheet(0)}
              />
            </View>
          )}
        </View>
        {/* <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} /> */}
        <BottomSheet
          enablePanDownToClose={true}
          ref={sheetRef}
          index={-1} // Set the initial index to -1 to prevent it from popping up automatically
          snapPoints={snapPoints}
          enableDynamicSizing={false}
          backgroundStyle={{ backgroundColor: color.greensync.background }}
          handleIndicatorStyle={{
            backgroundColor: "#000",
            width: 40,
            height: 4,
            borderRadius: 2,
          }}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetScrollView
            contentContainerStyle={{
              backgroundColor: color.greensync.background,
              paddingHorizontal: 16,
              flex: 1,
              paddingVertical: 20,
            }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <AddCatalogueItem formData={formData} setFormData={setFormData}/>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 0,
                }}
              >
                <Button
                  type="normal"
                  color="#f21160"
                  title="close"
                  onPress={closeBottomSheet}
                  width={"49%"}
                />
                <Button
                  type="normal"
                  color="#3CC687"
                  title="Add Item"
                  onPress={handleSubmitAuction}
                  width={"49%"}
                />
              </View>
            </ScrollView>
          </BottomSheetScrollView>
        </BottomSheet>
        <StatusBar />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default catalogue;
