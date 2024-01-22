import { StyleSheet, Text, View } from "react-native";

import Header from "../Components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoUtil from "../Screens/InfoUtil";

const Stack = createNativeStackNavigator();

const InfoStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="InfoUtil"
      screenOptions={({ route }) => {
        return {
          header: () => <Header title="InfoUtil" />,
        };
      }}
    >
      <Stack.Screen name="InfoUtil" component={InfoUtil} />
    </Stack.Navigator>
  );
};

export default InfoStack;

const styles = StyleSheet.create({});
