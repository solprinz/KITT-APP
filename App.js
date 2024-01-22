import { StyleSheet, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { colors } from "./src/global/colors";
import MainNavigator from "./src/Navigation/MainNavigator";
import { store } from "./src/app/services/store";
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.grey} barStyle="default" />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
