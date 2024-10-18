import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

export const Item = ({name, age, date, image}: {name: string, age: string, date: string, image: string }) => {
    return(
        <View style={styles.item}>
            <Image style={styles.img} source={image} />
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
    img: {
      width: 30,
      height: 30
    }
});