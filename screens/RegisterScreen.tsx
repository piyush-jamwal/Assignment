import * as React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";
import Navigation from "../navigation";
import { ScrollView } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SignUp({ navigation }) {
  function formSubmit() {
    if (name == "") {
      setMessage("Please fill all the fields.");
    } else if (email == "") {
      setMessage("Please fill all the fields.");
    } else if (password == "") {
      setMessage("Please fill all the fields.");
    } else if (Age == "") {
      setMessage("Please fill all the fields.");
    } else {
      dispatch({
        type: "userData",
        payload: { userData: { name, Age, email, password } },
      });
      navigation.navigate("App");
    }
  }
  let [name, setName] = useState(""),
    [password, setPassword] = useState(""),
    [email, setEmail] = useState(null),
    [message, setMessage] = useState(""),
    [Age, setAge] = useState("");
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <NativeBaseProvider>
        <Box safeArea flex={1} p="2" w="90%" mx="auto" py="8">
          <Heading size="lg" color="coolGray.800" fontWeight="600">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label
                _text={{ color: "muted.700", fontSize: "xs", fontWeight: 500 }}
              >
                Name
              </FormControl.Label>
              <Input
                type="text"
                isRequired={true}
                onChangeText={(text) => setName(text)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ color: "muted.700", fontSize: "xs", fontWeight: 500 }}
              >
                Age
              </FormControl.Label>
              <Input
                type="text"
                isRequired={true}
                onChangeText={(text) => setAge(text)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ color: "muted.700", fontSize: "xs", fontWeight: 500 }}
              >
                Email
              </FormControl.Label>
              <Input
                type="text"
                isRequired={true}
                onChangeText={(text) => setEmail(text)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ color: "muted.700", fontSize: "xs", fontWeight: 500 }}
              >
                Password
              </FormControl.Label>
              <Input
                type="password"
                isRequired={true}
                onChangeText={(text) => setPassword(text)}
              />
            </FormControl>

            <Button
              mt="2"
              colorScheme="indigo"
              _text={{ color: "white" }}
              onPress={formSubmit}
            >
              Sign up
            </Button>
            <Text>{message}</Text>
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              I'm a existing user{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign In
            </Link>
          </VStack>
        </Box>
      </NativeBaseProvider>
    </ScrollView>
  );
}
