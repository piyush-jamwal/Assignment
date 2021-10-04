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
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SignIn({ navigation }) {
  function formSubmit() {
    if (typedName === null) {
      setMessage("Please fill all the fields.");
    } else if (typedPassword == null) {
      setMessage("Please fill all the fields.");
    } else if (password === typedPassword && userName === typedName) {
      navigation.navigate("App");
    }
  }
  let [typedName, setName] = useState(null),
    [typedPassword, setPassword] = useState(null),
    [message, setMessage] = useState("");
  const state = useSelector((curSele) => curSele);
  let userName, password;
  if (state.userData) {
    userName = state.userData.name;
    password = state.userData.password;
  }

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: "coolGray.800",
                fontSize: "xs",
                fontWeight: 500,
              }}
            >
              Username
            </FormControl.Label>
            <Input
              type="text"
              isRequired={true}
              onChangeText={(text) => setName(text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: "coolGray.800",
                fontSize: "xs",
                fontWeight: 500,
              }}
            >
              Password
            </FormControl.Label>
            <Input
              type="password"
              isRequired={true}
              onChangeText={(text) => setPassword(text)}
            />
            {/* <Link
              _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link> */}
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            _text={{ color: "white" }}
            onPress={formSubmit}
          >
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
