import React from "react";
import { Text, View, Button } from "react-native";

export default function HomeScreen({ route, navigation }) {
  let type = "";
  let data = "";
  if (route.params) {
    type = route.params.type;
    data = route.params.data;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Open Camera"
        onPress={() => navigation.navigate("Camera")}
      />
      <Text>{type}</Text>
      <Text>{data}</Text>
    </View>
  );
}
