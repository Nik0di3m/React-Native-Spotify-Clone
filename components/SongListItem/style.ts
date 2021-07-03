import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        margin: 8,
    },
    rightContainer: {
        justifyContent: "space-around",
        flexShrink: 1,
        marginLeft: 8,
    },
    image: {
        width: 75,
        height: 75,
    },
    title: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
    },
    artist: {
        color: 'lightgrey'
    }

})