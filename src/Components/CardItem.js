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
    <View style={styles.cardContainer}>
      <Pressable
        onPress={() => {
          dispatch(setProductSelected(item.id));
          navigation.navigate("Gato", { id: item.id });
        }}
        style={styles.pressable}
      >
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: item.imagen }}
        />
        <View style={styles.textContainer}>
          <Text style={width > 350 ? styles.title : styles.minText}>
            {item.nombre}
          </Text>
          <Text style={styles.text}>{item.edad}</Text>
          <Text style={styles.text}>{item.sexo}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.background,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: "45%",
    overflow: "hidden",
    elevation: 2,
    justifyContent: "center",
  },
  pressable: {
    flex: 1,
  },
  image: {
    height: 220,
  },
  textContainer: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
  minText: {
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    marginTop: 4,
    textAlign: "center",
  },
});

export default CardItem;
