import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

// TokenCache ajustado para funcionar em diferentes plataformas
const tokenCache = {
  async getToken(key) {
    if (Platform.OS === "web") {
      // Para o ambiente web, use localStorage
      const item = localStorage.getItem(key);
      if (item) {
        console.log(`${key} was used 🔐 (web) \n`);
      } else {
        console.log("No values stored under key (web): " + key);
      }
      return item;
    }
    
    try {
      // Para dispositivos móveis, use SecureStore
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    if (Platform.OS === "web") {
      // Para o ambiente web, use localStorage
      localStorage.setItem(key, value);
      console.log(`${key} stored in localStorage (web)`);
      return;
    }
    
    try {
      // Para dispositivos móveis, use SecureStore
      await SecureStore.setItemAsync(key, value);
      console.log(`${key} stored in SecureStore`);
    } catch (err) {
      console.error("SecureStore save item error: ", err);
    }
  },
  async clearToken(key) {
    if (Platform.OS === "web") {
      // Para o ambiente web, use localStorage
      localStorage.removeItem(key);
      console.log(`${key} removed from localStorage (web)`);
    } else {
      // Para dispositivos móveis, use SecureStore
      await SecureStore.deleteItemAsync(key);
      console.log(`${key} removed from SecureStore`);
    }
  },
};

export default function RootLayout() {
  // Carregando a chave Clerk de variáveis de ambiente
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  // Carregamento de fontes personalizadas
  const [fontsLoaded] = useFonts({
    outfit: require("./../assets/fonts/Lora-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Lora-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Lora-Bold.ttf"),
  });

  // Verificação se as fontes foram carregadas
  if (!fontsLoaded) {
    return null; // Ou você pode retornar um indicador de carregamento enquanto as fontes estão sendo carregadas
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <Stack>
        {/* Tela de login sem cabeçalho */}
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
        {/* Rotas para as outras telas sem cabeçalho */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}
