import { Text, Pressable, Image, StyleSheet, View } from "react-native";
import { colors } from "../global/colors";
import { MaterialIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡BIENVENIDO A KITTAPP!</Text>
      <Text style={styles.subtitle}>¿Qué estás buscando?</Text>
      <Pressable
        style={styles.items}
        onPress={() => navigation.navigate("Adoptar")}
      >
        <Image
          source={require("../../assets/img/AdoptarImage.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.text}>Adoptar un gato</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={24}
          color={colors.secondary}
        />
      </Pressable>
      <Pressable
        style={styles.items}
        onPress={() => navigation.navigate("Publicar")}
      >
        <Image
          source={require("../../assets/img/PublicarImage.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.text}>Publicar adopción</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={24}
          color={colors.secondary}
        />
      </Pressable>
      <Pressable
        style={styles.items}
        onPress={() => navigation.navigate("InfoUtil")}
      >
        <Image
          source={require("../../assets/img/InfoImage.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.text}>Info útil</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={24}
          color={colors.secondary}
        />
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
  subtitle: {
    fontSize: 18,
    margin: 10,
    textAlign: "center",
  },
  items: {
    display: "flex",
    paddingRigth: 2,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    backgroundColor: colors.primary,
    flexDirection: "row",
    maxWidth: 341,
    height: 141,
    flexShrink: 0,
    margin: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 10,
  },
  text: {
    color: colors.secondary,
    fontSize: 20,
    width: "50%",
  },
  image: {},
});
