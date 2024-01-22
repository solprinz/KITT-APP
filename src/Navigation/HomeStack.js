import { StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import CatsList from "../Screens/CatstList";
import InfoUtil from "../Screens/InfoUtil";
import Publicar from "../Screens/Publicar";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        return {
          header: () => <Header title="Inicio" />,
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Adoptar" component={CatsList} />
      <Stack.Screen name="InfoUtil" component={InfoUtil} />
      <Stack.Screen name="Publicar" component={Publicar} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
