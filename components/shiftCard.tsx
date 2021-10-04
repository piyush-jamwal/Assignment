import React from "react";
import {
  Box,
  Heading,
  Button,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { View } from "./Themed";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function CardComponent(props) {
  const state = useSelector((curState) => curState);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {}}>
      <Box
        rounded="lg"
        overflow="hidden"
        width="72"
        shadow={1}
        _light={{ backgroundColor: "gray.50" }}
        _dark={{ backgroundColor: "gray.700" }}
      >
        <Box>
          <AspectRatio ratio={16 / 9}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _text={{ color: "white", fontWeight: "700", fontSize: "xs" }}
            position="absolute"
            bottom={0}
            px="3"
            py="1.5"
          ></Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {props.details ? props.details.HospitalName : ""}
            </Heading>
            <Text
              fontSize="xs"
              _light={{ color: "violet.500" }}
              _dark={{ color: "violet.300" }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {props.details ? props.details.Timing.from : ""}-
              {props.details ? props.details.Timing.to : ""}
            </Text>
            <Text>{props.details ? props.details.place : ""}</Text>
            <Text>{props.details ? props.details.department : ""}</Text>
          </Stack>

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="gray.500" fontWeight="400">
                {props.details ? props.details.dateOfPost : ""}
              </Text>
            </HStack>
            {!props.details.isApplied ? (
              <Button
                onPress={() => {
                  dispatch({
                    type: "isApplied",
                    payload: [
                      props.index,
                      props.details.id,
                      !props.details.isAccepted,
                    ],
                  });
                  navigation.navigate("TabThree");
                }}
              >
                Apply
              </Button>
            ) : (
              []
            )}
          </HStack>
        </Stack>
      </Box>
    </TouchableOpacity>
  );
}

export default function Card(props) {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <CardComponent
          key={props.index}
          details={props.details}
          index={props.index}
        />
      </Center>
    </NativeBaseProvider>
  );
}
