import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/shiftCard";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function RegistrationScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name</Text>
      <Text style={styles.title}>Age</Text>
      <Text style={styles.title}>Email</Text>
      <Text style={styles.title}>Password</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
