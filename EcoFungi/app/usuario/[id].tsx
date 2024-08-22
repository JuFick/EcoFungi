import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    const { id } = useLocalSearchParams ();
  return (
    <View style={styles.container}>
      <Text>TELA de USUÁRIO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
