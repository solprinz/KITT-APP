import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import SwitchItem from "../Components/SwitchItem";
import InputForm from "../Components/InputForm";
import Campo from "../Components/Campo";
import ButtonPrimary from "../Components/ButtonPrimary";

const Publicar = ({ value, navigation }) => {
  const enviarForm = () => {
    Alert.alert(
      "¡Se ha enviado correctamente tu publicación! ",
      "Revisaremos los datos proporcionados antes de publicarlo.",
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
    <ScrollView
      style={styles.container}
      automaticallyAdjustContentInsets={true}
      alwaysBounceVertical={true}
    >
      <View>
        <Text style={styles.title}>INFORMACIÓN DEL GATO</Text>
        <InputForm title="Nombre" label="" value={value} />
        <View>
          <InputForm title="Género (Macho o Hembra)" label="" />
        </View>
        <InputForm title="Fecha estimada de nacimiento" label="" />
        <Campo label="Seleccionar fotos del gato" />
        <Text style={styles.title}>DATOS VETERINARIOS</Text>
        <SwitchItem title="Vacunado/a" />
        <SwitchItem title="Desparasitado/a" />
        <SwitchItem title="Esterilizado/a" />
        <InputForm placeholder="Última visita al veterinario" />
        <InputForm placeholder="Problemas de salud existentes" />
        <InputForm placeholder="Última visita al veterinario" />
        <Text style={styles.title}>SOBRE EL GATO</Text>
        <InputForm placeholder="Historia" />
        <InputForm placeholder="Personalidad" />
        <InputForm placeholder="Info adicional" />
        <Text style={styles.title}>CONTACTO</Text>
        <InputForm placeholder="Email de contacto" />
        <InputForm placeholder="Ubicación" />
      </View>
      <View style={{ margin: 10 }}></View>
      <ButtonPrimary title="Publicar" onPress={enviarForm} />
    </ScrollView>
  );
};

export default Publicar;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    marginBottom: 90,
    paddingBottom: 100,
    flex: 1,
  },
  title: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
