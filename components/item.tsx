import { View, StyleSheet, Text } from "react-native";

export const Item = ({name, age, date}: {name: string, age: string, date: string}) => {
    return(
        <View style={styles.item}>
            <Text style={styles.texto}>{name}</Text>
            <Text style={styles.texto}>{age}</Text>
            <Text style={styles.texto}>{date}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#5E2F63FF',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    texto: {
      fontSize: 20,
      color: "#ffffff"
    },
});