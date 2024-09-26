import { View, Text, Image, Pressable, Platform } from 'react-native';
import React from 'react';
import Colors from './../../constants/Colors';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { useOAuth } from '@clerk/clerk-expo';


export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    if (Platform.OS !== 'web') {
      // Warm up the browser for better UX on mobile
      void WebBrowser.warmUpAsync();
    }
    
    return () => {
      if (Platform.OS !== 'web') {
        // Only call coolDownAsync on mobile platforms
        void WebBrowser.coolDownAsync();
      }
    };
  }, []);
};

if (Platform.OS !== 'web') {
  WebBrowser.maybeCompleteAuthSession();
}

export default function Login() {
  useWarmUpBrowser();
  
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  
  const onPress = React.useCallback(async () => {
    try {
      console.log("Iniciando OAuth flow");
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),  
      });

      console.log("OAuth flow concluído");

      if (createdSessionId) {
        console.log("Sessão criada com sucesso:", createdSessionId);
        // Pode redirecionar o usuário ou ativar a sessão
      } else {
        console.log("Usuário precisa completar signIn ou signUp");
        // Use signIn ou signUp para passos adicionais, como MFA
      }
    } catch (err) {
      console.error('Erro durante OAuth:', err);
    }
  }, [startOAuthFlow]);

  return (
    <View style={{ backgroundColor: Colors.CINZA_BEGE, height: '100%' }}>
      <Image
        source={require('./../../assets/images/login.jpg')}
        style={{ width: '100%', height: 500 }}
      />
      <View style={{ padding: 20, display: 'flex', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 25, textAlign: 'center' }}>
          Venha conhecer o seu Novo Amigo
        </Text>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 15,
            textAlign: 'center',
            color: Colors.ROXO,
          }}
        >
          Adote um novo PET e torne a sua vida e a dele melhor!!
        </Text>
        <Pressable
          onPress={onPress}
          style={{
            padding: 14,
            marginTop: 100,
            backgroundColor: Colors.AMARELINHO_ESCURO,
            width: '100%',
            borderRadius: 14,
          }}
        >
          <Text style={{ fontFamily: 'outfit-medium', fontSize: 18, textAlign: 'center' }}>
            Comece por Aqui
          </Text>
        </Pressable>
      </View>
    </View>
  );
}