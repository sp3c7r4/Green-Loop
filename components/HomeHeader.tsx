import { View, Text, Image } from 'react-native'
import React from 'react'

const HomeHeader = () => {
  return (
    <View style={{marginHorizontal: 16, marginTop: 10}}>
      <Image source={{uri: "https://fastly.picsum.photos/id/1/400/400.jpg?hmac=lOytrN6lDOH_Yx7NwwGIaCtxp6pyuH2V4hD6Eac-VI0"}} style={{width: 40, height: 40, borderRadius: 7, borderWidth: 1, borderColor: "#fff"}}/>
    </View>
  )
}

export default HomeHeader