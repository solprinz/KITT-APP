import { ScrollView, StyleSheet, Text, Alert } from "react-native";
import InputAuth from "../Components/InputAuth";
import ButtonPrimary from "../Components/ButtonPrimary";
import { colors } from "../global/colors";

const Formulario = ({ navigation, route }) => {
  const enviarForm = () => {
    Alert.alert(
      "¡Se ha enviado correctamente tu postulación! ",
      "Este proceso puede llegar a demorar varios días, ¡paciencia! Todos queremos lo mejor para estos gatitos.Te recomendamos estar atento a las notificaciones. En el caso de que su postulación cumpla los requisitos correspondientes y sea aceptada, en los próximos días se comunicarán contigo.",
      [
        {
          text: "Cerrar",
          onPress: () => navigation.navigate("Home"),
          style: "cancel",
        },
      ]
    );
  };
  return (
    <ScrollView>
      <Text style={styles.title}>FORMULARIO DE ADOPCIÓN</Text>
      <Text
        style={{
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: 20,
          margin: 5,
        }}
      >
        Tomaremos los datos personales y de contacto configurados en tu cuenta.
        Recuerda mantenerlos actualizados.
      </Text>
      <InputAuth label="¿Por qué quiere adoptar este gato?" />
      <InputAuth label="¿Con quién convive? ¿Tiene niños?" />
      <InputAuth label="Cuéntanos un poco sobre ti/ellos." />
      <InputAuth label="¿Tienes mascotas? ¿Perros, gatos? ¿Cuántos?" />
      <InputAuth label="¿Deseas agregar alguna otra información?" />
      <ButtonPrimary title="Enviar formulario" onPress={enviarForm} />
    </ScrollView>
  );
};

export default Formulario;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary,
  },
});
