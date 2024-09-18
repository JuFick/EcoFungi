import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'outfit': require('./../assets/fonts/Lora-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Lora-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Lora-Bold.ttf'),

  })

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index"
        options={{
          headerShown: false
        }} />
    </Stack>
  );
}