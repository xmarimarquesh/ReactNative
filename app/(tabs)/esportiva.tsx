import { FlatList, SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";
import data from "@/constants/data.json";
import { Item } from "@/components/item";
  
export default function Esportiva(){
    return(
        <>
        <Text style={styles.titulo}> Roupas Esportivas </Text>
        <SafeAreaView style={styles.container}>
            <Text>Esportivo</Text>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
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
        shadowRadius: 1
    }
});