import { Text, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Link, Redirect } from "expo-router";

export default function Index() {

    const {user}=useUser();
    return (
        <View
            style={{
                flex: 1,

            }}
        >
        {/* condicional para usuário logado se não logado, redirecioa para tela login se logado direciona para home */}
        {user?
        <Redirect href={'/(tabs)/home'}/>
        :<Redirect href={'/login'}/>
        }
        </View>
    );
}