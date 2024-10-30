import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebaseConfig";

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isEmailFocused, setEmailFocused] = useState(false);
    const [isPassFocused, setPassFocused] = useState(false);

    const auth = FIREBASE_AUTH;

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then((dadosUsuario) => {
                console.log(dadosUsuario);
                router.push('/(tabs)');
            }).catch((err) => {
                alert(err.message);
            });
    };

    return (
        <SafeAreaView style={styles.divzona}>
            <LinearGradient style={styles.div} colors={["#1C0036FF", "#120022FF", "#000000FF"]}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <View style={styles.textinho}>
                    <Text style={styles.texto_login}>Login</Text>
                </View>
            </LinearGradient>
            <View style={styles.div_principal}>
                <View style={styles.inputs}>
                    <TextInput
                        style={[styles.input, isEmailFocused && styles.inputFocused]}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="E-mail"
                        keyboardType="email-address"
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                    />
                    <TextInput
                        style={[styles.input, isPassFocused && styles.inputFocused]}
                        onChangeText={setPass}
                        value={pass}
                        placeholder="Password"
                        keyboardType="default"
                        secureTextEntry={true}
                        onFocus={() => setPassFocused(true)}
                        onBlur={() => setPassFocused(false)}
                    />
                    <View style={styles.esqueceu}>
                        <Text>Forgot your password?</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonn} onPress={signIn}>
                    <LinearGradient style={styles.button} colors={["#1C0036FF", "#120022FF", "#000000FF"]}>
                        <Text style={styles.button_text}>Submit</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={styles.semconta}>
                    <Text>Don't have an account? </Text>
                    <Link href="/register">Sign up</Link>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    divzona: {
        height: "100%"
    },
    div_principal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "60%"
    },
    semconta: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },
    inputFocused: {
        borderColor: '#ffffff',
        borderWidth: 2,
    },
    esqueceu: {
        width: "70%",
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    inputs: {
        width: "70%"
    },
    input: {
        height: 40,
        margin: 12,
        borderColor: 'transparent', // Inicialmente sem borda
        borderWidth: 2, // Para garantir que a borda seja visível ao focar
        padding: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonn: {
        padding: 10,
        margin: 12,
        width: "70%",
        height: 40
    },
    button: {
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: "100%",
    },
    button_text: {
        color: "#ffffff"
    },
    logo: {
        width: 90,
        height: 90
    },
    div: {
        flex: 1,
        borderBottomStartRadius: 75,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    texto_login: {
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'roboto',
        margin: 5
    },
    textinho: {
        display: 'flex',
        width: '100%',
        alignItems: 'flex-end',
        padding: 20,
    }
});
