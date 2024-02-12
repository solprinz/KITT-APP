import Header from "../Components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../Screens/Signup";
import Login from "../Screens/Login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={({}) => {
        return {
          header: () => <Header title="Bienvenido/a a KittApp" />,
        };
      }}
    >
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
