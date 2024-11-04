import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { FIRESTORE_DB } from "@/firebaseConfig"; 
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

interface Produto {
    id: string;
    name: string;
    img: string;
    preco: string
}

export default function HomeScreen() {
    const [produtos, setprodutos] = useState<Produto[]>([]); 
    const [newProduct, setnewProduct] = useState('');

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(FIRESTORE_DB, "produtos"), (snapshot) => {
            const produtoList: Produto[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Produto[];
            setprodutos(produtoList);
        });

        return () => unsubscribe();
    }, []);

    const deleteUser = async (id: string) => {
        await deleteDoc(doc(FIRESTORE_DB, "produtos", id));
    };

    const updateUser = async (id: string) => {
      if (newProduct === "") {
          Alert.alert("Por favor, insira um novo nome para o usuário.");
          return;
      }
  
      const userRef = doc(FIRESTORE_DB, "produtos", id);
  
      await updateDoc(userRef, {
          name: newProduct,
      });
  
      setnewProduct('');
  };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Produtos</Text>

            <FlatList   
                data={produtos} 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <img src={item.img} alt="" style={styles.img}/>
                        <View style={styles.corpo}>
                            <View style={styles.corpo1}> 
                                <Text style={styles.id}>{item.id}</Text>
                                <Text style={styles.black}>{item.name}</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => deleteUser(item.id)}>
                                    <Text style={styles.deleteButton}>Excluir</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => updateUser(item.id)}>
                                    <Text style={styles.deleteButton}>Atualizar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
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
    id: {
        fontSize: 12,
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
