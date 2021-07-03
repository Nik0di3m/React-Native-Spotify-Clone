import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
export const styles = StyleSheet.create({

    container: {
        backgroundColor: "#131313",
        position: 'absolute',
        flexDirection: 'row',
        bottom: "7%",
        width: '100%',
        left: 0,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    rightContainer: {
        justifyContent: "space-between",
        flexShrink: 1,
        marginLeft: 8,
        flexDirection: 'row',
        alignItems: 'center',
        width: "95%"
    },
    image: {
        width: 75,
        height: 75,
    },
    title: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
        margin: 6,
    },
    artist: {
        color: 'lightgrey',
        fontSize: 18,
    },
    name: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        width: "30%",
        justifyContent: 'space-between',
        margin: 8,
    }

})