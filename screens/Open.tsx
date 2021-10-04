import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { RootStackScreenProps } from "../types";
import Card from "../components/shiftCard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Applied from "./Applied";
import Accepted from "./Accepted";
import ShiftScreen from "./ShiftScreen";

export default function Open({ navigation }: RootStackScreenProps<"Open">) {
  const state = useSelector((curState) => curState);
  console.log("openShifts:", state.userData);

  return (
    <ScrollView>
      <View style={styles.container}>
        {state.openShifts
          ? state.openShifts.map((details, index) => (
              <Card
                key={index}
                details={details}
                navigation={navigation}
                index={index}
              />
            ))
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
