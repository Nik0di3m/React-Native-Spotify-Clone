import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
    },
    image: {
        width: 200,
        height: 200,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: "500"
    },
    infoContainer: {
        flexDirection: 'row',
        margin: 6

    },
    button: {
        backgroundColor: '#1cd05d',
        height: 60,
        width: 175,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,



    },
    buttonText: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 20,
    },
    by: {
        color: 'lightgray',
        margin: 5,
        fontSize: 16,
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 16,
    }

})