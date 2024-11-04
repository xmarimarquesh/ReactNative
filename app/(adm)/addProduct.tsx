import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { FIRESTORE_DB } from "@/firebaseConfig"; 
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

interface Produto {
    id: string;
    name: string;
    img: string;
    preco: string;
    tipo: string
}

export default function HomeScreen() {
    const [newProduct, setnewProduct] = useState<Produto>({
        id: '',
        name: '',
        img: '',
        preco: '',
        tipo: ''
    });

    const addUser = async () => {
        if (!newProduct.name || !newProduct.img || !newProduct.preco) {
            Alert.alert("Por favor, preencha todos os campos.");
            return;
        }
        await addDoc(collection(FIRESTORE_DB, "produtos"), {
            id: newProduct.id,
            name: newProduct.name,
            img: newProduct.img,
            preco: newProduct.preco,
            tipo: newProduct.tipo
        });
        
        setnewProduct({
            id: '',
            name: '',
            img: '',
            preco: '',
            tipo: ''
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Adicionar produto</Text>
            <TextInput
                style={styles.input}
                placeholder="ID do produto"
                value={newProduct.id}
                onChangeText={(text) => setnewProduct((pro) => ({
                    ...pro,
                    id: text
                }))}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome do produto"
                value={newProduct.name}
                onChangeText={(text) => setnewProduct((pro) => ({
                    ...pro,
                    name: text
                }))}
            />
            <TextInput
                style={styles.input}
                placeholder="Imagem do produto (URL)"
                value={newProduct.img}
                onChangeText={(text) => setnewProduct((pro) => ({
                    ...pro,
                    img: text
                }))}
            />
            <TextInput
                style={styles.input}
                placeholder="Preço do produto"
                value={newProduct.preco}
                onChangeText={(text) => setnewProduct((pro) => ({
                    ...pro,
                    preco: text
                }))}
            />
            <TextInput
                style={styles.input}
                placeholder="Tipo do produto"
                value={newProduct.tipo}
                onChangeText={(text) => setnewProduct((pro) => ({
                    ...pro,
                    tipo: text
                }))}
            />
            <TouchableOpacity style={styles.button} onPress={addUser}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        height: "80%"
    },
    id: {
        fontSize: 12,
    },
    titulo: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        fontSize: 24,
        padding: 24,
        fontWeight: "bold",
        color: "#340052FF",
        fontFamily: "Roboto"
    },
    corpo: {
        display: "flex",
        flexDirection: "row",
        width: "70%"
    },
    corpo1: {
        display: "flex",
        width: "70%"
    },
    black: {
        fontWeight: "bold",
        fontSize: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    img: {
        height: 72,
        borderRadius: 24,
        borderWidth: 1,  
        borderColor: '#D1D1D1FF',  
        borderStyle: 'solid',
        width: 72
    },
    button: {
        backgroundColor: '#14002BFF',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
    },
    userItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    deleteButton: {
        color: 'black',
        backgroundColor: '#D3D3D3FF',
        margin: 2,
        padding: 4,
        borderRadius: 6
    },
});
