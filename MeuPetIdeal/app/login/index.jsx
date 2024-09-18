import { View, Text } from 'react-native'
import React from 'react'

export default function Login(){
    return (
        <View>
           <Image source={require('./../../assets/image/login.png')}
            style={{
                widht:'100%',
                height: 500
            }}
           />
           <View style>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:30

            }}>Seu Pet Ideal está Aqui!</Text>
           </View>
        </View>
    )


}