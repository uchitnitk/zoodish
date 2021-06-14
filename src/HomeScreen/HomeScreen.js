import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen({ route, navigation }) {
    let type = "";
    let data = "";
    if (route.params) {
        type = route.params.type;
        data = route.params.data;
    }
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <FontAwesome name="camera-retro" size={24} color="black" />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Camera")}
            >
                <Text>Open Camera to scan</Text>
            </TouchableOpacity>
            <Text>{type}</Text>
            <Text>{data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#CEE5D0",
        padding: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
});
