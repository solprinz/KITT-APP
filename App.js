import { StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { colors } from "./src/global/colors";
import MainNavigator from "./src/Navigation/MainNavigator";
import { store } from "./src/app/services/store";
import { init } from "./src/database/index";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";

init()
  .then(() => console.log("DB Initialized"))
  .catch((err) => console.log(err));

const App = () => {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.grey} barStyle="default" />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
};

export default App;
