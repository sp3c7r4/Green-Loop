import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{headerShown: false, animation: "fade"}}>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="AuctionPage"/>
    </Stack>
  )
}

export default _layout