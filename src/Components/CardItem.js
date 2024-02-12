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
import { Entypo } from "@expo/vector-icons";

const CardItem = ({ item, navigation, route }) => {
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
          <View style={styles.text}>
            <Text>{item.sexo}</Text>
            <Text>{item.edad}</Text>
          </View>
          <View style={styles.sub}>
            <Entypo name="location-pin" size={14} color="grey" />
            <Text style={{ fontStyle: "italic", color: "grey" }}>
              {item.ubicacion}
            </Text>
          </View>
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
    fontSize: 20,
    color: colors.primary,
    textAlign: "center",
    fontFamily: "Protest",
  },
  minText: {
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    marginTop: 1,
    textAlign: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  sub: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default CardItem;
