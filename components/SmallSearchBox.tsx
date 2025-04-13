import { View, TextInput, Image, Pressable } from 'react-native'

const SmallSearchBox = ({ onPress, value, onChangeText }:{onPress: () => void, onChangeText: (value: string) => void, value: string}) => {
  return (
    <View style={{ backgroundColor: "rgba(255, 255, 255,1)", borderRadius: 8, height: 30, width: "40%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
      <View style={{width: 100, paddingLeft: 20, height: 30, alignItems:"center", justifyContent: "center" }}>
        <TextInput value={value} placeholder='search...' onChangeText={onChangeText} style={{ width: 110, flex: 1, marginLeft: 10, color: "#fff"}}/>
      </View>
      <Pressable onPress={onPress} style={{width: 30, height: 30, alignItems:"center", justifyContent: "center" }}>
        <Image source={require("@/assets/images/search.png")} style={{width: 15, height: 15}} resizeMode='contain'/>
      </Pressable>
    </View>
  )
}

export default SmallSearchBox