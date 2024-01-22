import { StyleSheet } from "react-native";
import { colors } from "../global/colors";

const CatItem = () => {
  return <View>Detalle del gato</View>;
};

export default CatItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "black",
    margin: 10,
    borderRadius: 20,
    height: 100,
    width: "80%",
    marginHorizontal: "10%",
  },
  text: {
    width: "80%",
    margin: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 15,
    color: colors.secondary,
  },
  minText: {
    width: "80%",
    margin: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 15,
  },
  image: {
    minWidth: 50,
    minHeight: 50,
    marginLeft: 40,
  },
});
