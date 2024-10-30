import { FlatList, SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";
  
export default function Social(){
    return(
        <>
        <Text style={styles.titulo}> Roupas Sociais </Text>
        <SafeAreaView style={styles.container}>
            <Text>Social</Text>
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