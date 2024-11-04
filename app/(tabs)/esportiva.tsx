import { FIRESTORE_DB } from "@/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

interface Produto {
    id: string;
    name: string;
    img: string;
    preco: string
}

export default function Banho(){
    const [produtos, setProdutos] = useState<Produto[]>([]); 

    useEffect(() => {
        const produtosRef = collection(FIRESTORE_DB, "produtos");
        const q = query(produtosRef, where("tipo", "==", "esporte"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const userList: Produto[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Produto[];
            setProdutos(userList);
        });

        return () => unsubscribe();
    }, []);
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}> Roupas Esportivas </Text>
            <FlatList
                style={styles.lista}
                contentContainerStyle={styles.listaContent}
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <Image source={{ uri: item.img }} style={styles.img} />
                        <Text style={styles.black}>{item.name}</Text>
                        <Text>R${item.preco}</Text>
                        <TouchableOpacity style={styles.vermais}>
                            <Text style={styles.white}>Ver mais</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    lista: {
        width: "100%",
    },
    listaContent: {
        alignItems: 'center', 
        width: "100%"
    },
    userItem: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: 260,
        borderRadius: 24,
        backgroundColor: "white",
        margin: 12,
        gap: 24,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3, 
        shadowRadius: 12, 
        elevation: 4,
    },
    black: {
        fontWeight: "bold",
        fontSize: 15,
    },
    vermais: {
        backgroundColor: "#2C0055FF",
        padding: 6,
        borderRadius: 8
    },
    white: {
        color: "#ffffff"
    },
    img: {
        height: 128,
        borderRadius: 24,
        borderWidth: 1,  
        borderColor: '#D1D1D1FF',  
        borderStyle: 'solid',
        padding: 4,
        width: 128
    },
    titulo: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        fontSize: 24,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        padding: 24,
        fontWeight: "bold",
        color: "#340052FF",
        fontFamily: "Roboto"
    }
});