import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../components/shiftCard";
import { RootStackScreenProps } from "../types";
import { useSelector } from "react-redux";

export default function Applied({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  const state = useSelector((curState) => curState);
  // state.openShifts.forEach((details) =>
  //   console.log("Applied screen", details, details.isApplied)
  // );
  return (
    <ScrollView>
      <View style={styles.container}>
        {state.openShifts
          ? state.openShifts.map((details, index) => {
              if (details.isApplied) {
                return <Card key={index} details={details} />;
              }
            })
          : []}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
