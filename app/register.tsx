import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebaseConfig";

export default function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [confPass, setConfPass] = useState('');
    const [date, setDate] = useState('');

    const auth = FIREBASE_AUTH;

    const register = () => {
        if (pass !== confPass) {
            alert("Passwords do not match");
            return;
        }

        createUserWithEmailAndPassword(auth, email, pass)
            .then((dadosUsuario) => {
                console.log(dadosUsuario);
                router.push('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    console.log(email, pass);
    console.log(typeof email, typeof pass);

    return (
        <>
            <SafeAreaView style={styles.divizona}>
                <LinearGradient style={styles.div} colors={["#1C0036FF", "#120022FF", "#000000FF"]}>
                    <Image style={styles.logo} source="../assets/images/logo.png" />
                    <View style={styles.textinho}>
                        <Text style={styles.texto_login}>Register</Text>
                    </View>
                </LinearGradient>
                <View style={styles.div_principal}>
                    <View style={styles.inputs}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                            placeholder="Name"
                            keyboardType="default"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="E-mail"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setPass}
                            value={pass}
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setConfPass}
                            value={confPass}
                            placeholder="Confirm password"
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setDate}
                            value={date}
                            placeholder="Date of birth"
                            keyboardType="default"
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonn} onPress={register}>
                        <LinearGradient style={styles.button} colors={["#1C0036FF", "#120022FF", "#000000FF"]}>
                            <Text style={styles.button_text}>Submit</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View>
                        <Link href={"/"}>Back to login</Link>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    divizona: {
        height: "100%"
    },
    div_principal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "60%"
    },
    inputs: {
        width: "70%"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
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
