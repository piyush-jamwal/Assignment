/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import Open from "../screens/Open";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Accepted from "../screens/Accepted";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Applied from "../screens/Applied";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShiftScreen from "../screens/ShiftScreen";
import SignUp from "../screens/RegisterScreen";
import SignIn from "../screens/SignIn";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { NavigationEvents } from "react-navigation";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <MyStack />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen
        name="App"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabTwo"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={Open}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Open",
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={Accepted}
        options={{
          title: "Accepted",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={Applied}
        options={{
          title: "Applied",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
// const Stack = createNativeStackNavigator<RootStackParamList>();

// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Root"
//         component={ShiftScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Applied"
//         component={Applied}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="NotFound"
//         component={NotFoundScreen}
//         options={{ title: "Oops!" }}
//       />
//       <Stack.Group screenOptions={{ presentation: "modal" }}>
//         <Stack.Screen name="Modal" component={ModalScreen} />
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// }

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
