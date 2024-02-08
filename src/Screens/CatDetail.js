import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ButtonPrimary from "../Components/ButtonPrimary";
import { Entypo } from "@expo/vector-icons";

const CatDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.adoptar.value.productSelected);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: product.imagen }}
      />
      <View style={styles.boxs}>
        <View style={styles.boxDatos}>
          <Text style={styles.text}> Edad:</Text>
          <Text style={styles.bold}>{product.edad}</Text>
        </View>
        <View style={styles.boxNombre}>
          <Text style={{ color: colors.background, textAlign: "center" }}>
            Nombre:
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: colors.background,
              textAlign: "center",
              fontSize: 18,
            }}
          >
            {product.nombre}
          </Text>
        </View>
        <View style={styles.boxDatos}>
          <Text style={styles.text}>Sexo:</Text>
          <Text style={styles.bold}>{product.sexo}</Text>
        </View>
      </View>
      <Text style={{ fontStyle: "italic", marginTop: 5 }}>
        <Entypo name="location-pin" size={14} color="black" />
        Ubicación: {product.ubicacion}
      </Text>
      <Text style={styles.title}>Salud:</Text>
      <Text>Vacunas: {product.vacunas}</Text>
      <Text>Desparasitado: {product.desparasitado}</Text>
      <Text>Esterilizado: {product.esterilizado}</Text>
      <Text>Problemas de salud: {product.problemas}</Text>
      <Text>Última visita al veterinario: {product.veterinario}</Text>
      <Text style={styles.title}>Historia:</Text>
      <Text> {product.historia}</Text>

      <Text style={styles.title}>Personalidad:</Text>
      <Text> {product.personalidad}</Text>
      <Text style={{ fontStyle: "italic", marginTop: 10, textAlign: "right" }}>
        Fecha de publicación:{product.fecha}
      </Text>
      <ButtonPrimary
        title="¡Quiero adoptarlo/a"
        onPress={() => navigation.navigate("Formulario")}
      />
      <Text style={styles.text}></Text>
    </ScrollView>
  );
};

export default CatDetail;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    marginBottom: 90,
    paddingBottom: 250,
  },
  image: {
    width: "80%",
    height: 400,
    alignSelf: "center",
  },
  nombre: {
    fontSize: 30,
    textAlign: "center",
    color: colors.accent,
    marginBottom: 10,
  },
  boxs: {
    flexDirection: "row",
    alignSelf: "space-evenly",
    color: colors.primary,
  },
  boxDatos: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    backgroundColor: colors.background,
    marginLeft: 10,
    width: "25%",
    textAlign: "center",
    height: 60,
    marginTop: 10,
  },
  boxNombre: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
    padding: 15,
    backgroundColor: colors.accent,
    marginLeft: 10,
    width: "40%",
    textAlign: "center",
  },
  title: { fontWeight: "bold", fontSize: 17, marginTop: 10, marginBottom: 10 },
  bold: {
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
  text: { color: colors.primary, textAlign: "center", marginTop: 10 },
  button: {
    backgroundColor: colors.accent,
    fontSize: 50,
    width: 200,
    height: 40,
    borderRadius: 10,
    margin: 10,
  },
});
