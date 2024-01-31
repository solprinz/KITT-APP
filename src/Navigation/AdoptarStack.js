import { StyleSheet, Text, View } from "react-native";
import CatsList from "../Screens/CatstList";
import Header from "../Components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CatDetail from "../Screens/CatDetail";

const Stack = createNativeStackNavigator();

const AdoptarStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CatsList"
      screenOptions={({ route }) => {
        return {
          header: () => <Header title="Adoptar" />,
        };
      }}
    >
      <Stack.Screen name="CatsList" component={CatsList} />
      <Stack.Screen name="Gato" component={CatDetail} />
    </Stack.Navigator>
  );
};

export default AdoptarStack;

const styles = StyleSheet.create({});
