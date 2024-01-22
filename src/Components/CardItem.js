import {
  Image,
  View,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setProductSelected } from "../features/adoptar/adoptarSlice";

const CardItem = ({ item, navigation }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Pressable

      /*   onPress={() => {
          dispatch(setProductSelected(item.id));
          navigation.navigate("Gato", { id: item.id });
        }} */
      >
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: item.imagen }}
        />
        <View>
          <Text style={width > 350 ? styles.title : styles.minText}>
            {item.nombre}
          </Text>
          <Text style={styles.text}>{item.edad}</Text>
          <Text style={styles.text}>{item.genero}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: colors.background,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: "40%",
    height: 250,
  },

  title: {
    textAlign: "center",
    fontSize: 16,
    color: colors.primary,
  },
  text: {
    textAlign: "center",
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
    minWidth: 100,
    minHeight: 150,
  },
});
