import { StyleSheet, Text, View } from "react-native";

import Header from "../Components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Perfil from "../Screens/Perfil";
import ImageSelector from "../Screens/ImageSelector";

const Stack = createNativeStackNavigator();

const PerfilStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={({ route }) => {
        return {
          header: () => <Header title="Perfil" />,
        };
      }}
    >
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default PerfilStack;

const styles = StyleSheet.create({});
