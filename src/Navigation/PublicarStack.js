import { StyleSheet } from "react-native";
import Header from "../Components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Publicar from "../Screens/Publicar";

const Stack = createNativeStackNavigator();

const PublicarStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Publicar"
      screenOptions={({ route }) => {
        return {
          header: () => <Header title="Publicar" />,
        };
      }}
    >
      <Stack.Screen name="Publicar" component={Publicar} />
    </Stack.Navigator>
  );
};

export default PublicarStack;

const styles = StyleSheet.create({});
