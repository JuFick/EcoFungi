import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
  const { user } = useUser();

  console.log("User:", user); // Para verificar se o usuário está sendo carregado

  // Função para pegar a inicial do primeiro nome
  const getInitial = (name) => {
    if (!name) return "U"; // Exibe "U" por padrão se não houver nome
    return name.charAt(0).toUpperCase();
  };

  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <View>
        <Text style={{
          fontFamily: "outfit",
          fontSize: 18,
        }}>
          Bem-vindo(a)!
        </Text>
        <Text style={{
          fontFamily: "outfit-medium",
          fontSize: 25,
        }}>
          {user ? user.firstName : 'Visitante'}
        </Text>
      </View>

      {/* Se houver imagem, exibe a imagem, caso contrário, exibe a inicial do nome */}
      {user?.imageUrl ? (
        <Image 
          source={{ uri: user.imageUrl }}
          style={{ 
            width: 40, 
            height: 40,
            borderRadius: 99
          }} 
        />
      ) : (
        <View style={{
          width: 40,
          height: 40,
          borderRadius: 99,
          backgroundColor: "#ccc", // Cor de fundo para o círculo
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            color: "#fff" // Cor da inicial
          }}>
            {getInitial(user?.firstName)}
          </Text>
        </View>
      )}
    </View>
  );
}
