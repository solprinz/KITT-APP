import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ItemDetail = ({ route, navigation, category }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.shop.value.productSelected);
  const images = product.images ? product.images : [];

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: images[2] }}
        resizeMode="cover"
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>Precio: ${product.price}</Text>
      <Pressable
        style={styles.button}
        onPress={() => dispatch(addItem(product))}
      >
        <Text style={styles.buttonText}>Agregar al carrito</Text>
      </Pressable>
      <Pressable
        style={styles.goBack}
        onPress={() => navigation.navigate("Category", { category })}
      >
        <Text style={styles.buttonText}>Volver atrás</Text>
      </Pressable>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.background,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: "blue",
    margin: 30,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: colors.accent,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.accent,
    fontSize: 50,
    width: 200,
    height: 40,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: colors.secondary,
    textAlign: "center",
    margin: 10,
  },
  goBack: {
    backgroundColor: colors.primary,
    fontSize: 50,
    width: 200,
    height: 40,
    borderRadius: 10,
  },
});
