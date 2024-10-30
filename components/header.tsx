import { LinearGradient } from "expo-linear-gradient"
import { Image, ImageSourcePropType, Text, View, StyleSheet } from "react-native"


export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <LinearGradient style={styles.div} colors={["#1C0036FF", "#120022FF", "#000000FF"]}>
            <View style={styles.meio}>
                <Text style={styles.color}>Fashion</Text>
                <Text style={styles.font}>STORE</Text>
            </View>
            <Image source={image} style={styles.img}></Image>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#353434FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    color: {
        color: "#ffffff",
        fontSize: 30,
        fontFamily: "Fontzinha"
    },
    font: {
        fontFamily: "Roboto",
        color: "#ffffff"
    },
    div: {
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 24
    },
    meio: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }, 
    img: {
        width: 64,
        height: 64
    }
})