import { StyleSheet } from "react-native";
import CatsList from "../Screens/CatstList";
import Header from "../Components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CatDetail from "../Screens/CatDetail";
import Formulario from "../Screens/Formulario";

const Stack = createNativeStackNavigator();

const AdoptarStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CatsList"
      screenOptions={() => {
        return {
          header: () => <Header title="Adoptar" />,
        };
      }}
    >
      <Stack.Screen name="Gato" component={CatDetail} />
      <Stack.Screen name="CatsList" component={CatsList} />
      <Stack.Screen name="Formulario" component={Formulario} />
    </Stack.Navigator>
  );
};

export default AdoptarStack;

const styles = StyleSheet.create({});
