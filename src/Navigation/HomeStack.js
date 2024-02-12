import { StyleSheet } from "react-native";
import Header from "../Components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import CatsList from "../Screens/CatstList";
import InfoUtil from "../Screens/InfoUtil";
import Publicar from "../Screens/Publicar";
import Perfil from "../Screens/Perfil";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        return {
          header: () => (
            <Header
              title={
                route.name === "Home"
                  ? "Inicio"
                  : route.name === "Adoptar"
                  ? "Adoptar"
                  : route.name === "Publicar"
                  ? "Publicar"
                  : route.name === "Perfil"
                  ? "Perfil"
                  : "Info Útil"
              }
            />
          ),
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Adoptar" component={CatsList} />
      <Stack.Screen name="InfoUtil" component={InfoUtil} />
      <Stack.Screen name="Publicar" component={Publicar} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
