import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
    },
    rightContainer: {
        justifyContent: "space-around",
        flexShrink: 1,
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