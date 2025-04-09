import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'

const image = "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
interface DataProps {
  id: number
  name: string
  date: string
  time: string
  location: string
  image_url: string
  content: string
}

function Button({type, onPress}:{onPress?: () => void,type: string}) {
  const buttonType = type === 'delete' ? 'delete' : 'request'
  return (
  <TouchableOpacity onPress={onPress} style={{ padding: 5, backgroundColor: buttonType === 'delete' ? "#f21160" : "#3CC687", height: 25, borderRadius: 8, width: 50, justifyContent: "center", alignItems: "center" }}>
    <Text style={{color: "#fff", fontSize: 10, fontFamily: "Satoshi-Medium"}}>{ buttonType === 'delete' ? "Remove" : "Request" }</Text>
  </TouchableOpacity>
  )
}

const CartContainer = ({data, onPressDelete, onPressRequest}:{data: DataProps, onPressDelete: () => void, onPressRequest: () => void}) => {
  return (
    <View>
        <View style={{ flexDirection: "row", width: "100%", height: 150, backgroundColor: "rgba(255,255,255,0.2)", borderColor: "rgba(255,255,255,0.5)", borderWidth: 0.4, borderRadius: 8, marginVertical: 4, position: "relative"}}>
          <View>
            <ImageBackground
                source={{ uri: image }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: 30,
                  width: 30,
                  borderTopLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  overflow: "hidden", // Ensures the image respects the border radius
                }}
              />
              <View>
                <Text style={{fontSize: 10, marginLeft: 35, fontFamily: "Satoshi-Medium", color: "#fff" }}>Sarafa Satar <Text style={{color: "#3CC687", fontFamily: "Satoshi-Bold"}}>Recycler</Text></Text>
                <Text style={{ fontSize: 8, opacity: 0.4, marginLeft: 35, fontFamily: "Satoshi-Medium", color: "#fff" }}>{data.date} {data.time}</Text>
              </View>
          </View>
          <View style={{flex: 1, position: "absolute", bottom: 0, left: 0, height: "70%", width: "60%", marginBottom: 7 }}>
            <View style={{gap: 3}}>
              <Text style={{fontFamily: "Satoshi-Bold", color: "#fff", paddingLeft: 10}}>{data.name}</Text>
              <Text style={{fontFamily: "Satoshi-Regular", color: "#fff", paddingLeft: 10, fontSize: 9}}>{data.content}</Text>
            </View>
          </View>
            <View style={{ flex: 1, gap: 5, alignItems: "flex-end", justifyContent: "center", paddingRight: 10}}>
              <Image source={{uri: data.image_url}} style={{width: 105, height: 105, borderRadius: 8}}/>
              <View style={{flexDirection: "row", gap: 5 }}>
                <Button type="delete" onPress={onPressDelete}/>
                <Button type="request" onPress={onPressRequest}/>
              </View> 
            </View>
        </View>
    </View>
  )
}

export default CartContainer