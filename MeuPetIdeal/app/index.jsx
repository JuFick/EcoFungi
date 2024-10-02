import { useUser } from '@clerk/clerk-expo';
import { View } from 'react-native';
import React, { useEffect } from 'react';
import { Redirect, useRootNavigationState } from 'expo-router';

export default function Index() {
  const { user } = useUser();
  const navigationState = useRootNavigationState(); 
  
  useEffect(() => {
    CheckNavLoaded();
  }, [navigationState]); // Adiciona dependência de `navigationState`

  const CheckNavLoaded = () => {
    if (!navigationState?.key) {
      return null;
    }
  };

  // Verifica se o hook de navegação está carregado antes de renderizar
  if (!navigationState?.key) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Verifica se o usuário está logado e redirecione apropriadamente */}
      {user ? (
        <Redirect href={'/(tabs)/home'} />
      ) : (
        <Redirect href={'/login'} />
      )}
    </View>
  );
}

// <Link href={'/login'}>
// <Text>index</Text>
// </Link>