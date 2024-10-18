import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";

export default function Login(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [count, setCount] = useState(0);
    // const onPress = () => setCount(prevCount => prevCount + 1);

    const onPress = () => {
        router.push("/(tabs)")
    }

    console.log(email, pass)
    console.log(typeof email, typeof pass);

    return(
        <>
            <SafeAreaView>
                <Text>Login</Text>
                <Text>E-mail</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    />
                <Text>Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPass}
                    value={pass}
                    placeholder="Digite sua senha"
                    keyboardType="numeric"
                    secureTextEntry={true}
                />
                <Text>Count: {count}</Text>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text>Logar</Text>
                </TouchableOpacity>
                <View>
                    <Link href={"/register"} >Cadastre-se</Link>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
        button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
  });