import {
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

const CatDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.adoptar.value.productSelected);
  /*   const images = .images ? product.images : []

   */

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
          <Text style={styles.text2}>Nombre:</Text>
          <Text style={styles.bold2}>{product.nombre}</Text>
        </View>
        <View style={styles.boxDatos}>
          <Text style={styles.text}>Sexo:</Text>
          <Text style={styles.bold}>{product.sexo}</Text>
        </View>
      </View>
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

      <ButtonPrimary title="Postularse" />
      <View>
        <Text style={styles.text}></Text>
      </View>
    </ScrollView>
  );
};

export default CatDetail;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flex: 1,
    /*     justifyContent: "start", */
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
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    backgroundColor: colors.accent,
    marginLeft: 10,
    width: "40%",
    textAlign: "center",
  },
  title: { fontWeight: "bold", fontSize: 16, margin: 10 },
  bold: {
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
  text: { color: colors.primary, textAlign: "center", marginTop: 10 },
  bold2: {
    fontWeight: "bold",
    color: colors.background,
    textAlign: "center",
    fontSize: 18,
  },
  text2: { color: colors.background, textAlign: "center" },
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
