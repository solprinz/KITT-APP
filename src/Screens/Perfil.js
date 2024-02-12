import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useGetProfileImageQuery } from "../app/services/adoptarService";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../global/colors";
import Campo from "../Components/Campo";
import ButtonPrimary from "../Components/ButtonPrimary";
import { deleteAllSession } from "../database";
import { clearUser } from "../features/auth/authSlice";

const Perfil = ({ navigation }) => {
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.value.localId);
  const { data } = useGetProfileImageQuery(localId);

  const onLogout = () => {
    deleteAllSession().then((result) => console.log(result));
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          data ? { uri: data.image } : require("../../assets/img/Perfil.jpg")
        }
        resizeMode="cover"
        style={styles.image}
      />
      <Pressable onPress={() => navigation.navigate("ImageSelector")}>
        <Text> Cambiar imagen</Text>
      </Pressable>
      <Campo label="Mis datos" />
      <Campo label="Configuración de la cuenta" />
      <Campo label="Ayuda" />
      <ButtonPrimary title="Cerrar sesión" onPress={onLogout} />
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  button: {
    width: "90%",
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: "enter",
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
