import { Image, ImageSourcePropType, Text, View, StyleSheet } from "react-native"


export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <View style={styles.background}>
            <Text style={styles.color}>Header example</Text>
            <Image source={image}></Image>
        </View>
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
        fontWeight: "900",
        fontSize: 30
    }
})