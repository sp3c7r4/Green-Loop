import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
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

interface DataProps {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  image_url: string;
  content: string;
}

const catalogue = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [formData, setFormData] = useState({
      name: "",
      brand: "",
      issue: "",
      condition: "",
      location: "",
      expiry_time: "",
      details: ""
    })
    useEffect(() => {
      console.log(formData)
    }, [formData])
  
  const snapPoints = useMemo(() => ["70%", "90%"], []);
  
  // callbacks
  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);
  const openBottomSheet = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const closeBottomSheet = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const [catalogueItems, setCatalogueItems] = useState<DataProps[]>([]);
  const [searchText, setSearchText] = useState("");
  const onPressDelete = useCallback((id: number): void => {
    setCatalogueItems((prev) => {
      const filter = prev.filter((item) => item.id !== id);
      return filter;
    });
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1} // Backdrop disappears when the sheet is closed
        appearsOnIndex={0} // Backdrop appears when the sheet is open
        opacity={0.2} // Adjust the opacity of the backdrop
        enableTouchThrough={false} // Prevent touches from passing through the backdrop
        style={{ backgroundColor: "#000" }} // Set the overlay color
      />
    ),
    []
  );

  const onPressRequest = (id: number): void => {
    console.log(id);
  };
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
                  onPressDelete={() => onPressDelete(item.id)}
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
          onChange={handleSheetChange}
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
