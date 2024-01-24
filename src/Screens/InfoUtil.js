import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../global/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const InfoUtil = () => {
  return (
    <ScrollView
      style={styles.container}
      /*       automaticallyAdjustContentInsets={true}
      alwaysBounceVertical={true} */
    >
      <Image
        source={require("../../assets/img/Esterilizar.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <View>
        <Text style={styles.text}>
          La <Text style={styles.bold}>esterilización</Text> tiene muchas
          ventajas. La más importante es que evita el riesgo de embarazos no
          deseados y {""}
          <Text style={styles.bold}>
            ayuda a reducir la población de gatos callejeros.
          </Text>
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Además, reduce la probabilidad de que tu gato sufra ciertas
          enfermedades y se comporte de forma poco sociable. ¿Quieres saber más
          acerca de esto?
        </Text>
      </View>
      <View>
        <Image
          source={require("../../assets/img/BenFisicos.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title}>BENEFICIOS FÍSICOS</Text>
        <Text style={styles.text}>
          En hembras, la esterilización elimina el riesgo de sufrir enfermedades
          relacionadas con los ovarios o el útero, como el cáncer o la metritis.
          También reduce el riesgo de enfermedades inducidas por hormonas.
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          En machos, la esterilización elimina el riesgo de sufrir enfermedades
          relacionadas con los testículos, como el cáncer, y reduce el riesgo de
          sufrir enfermedades inducidas por la testosterona, como la
          prostatitis.
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          Tanto en hembras como en machos, la castración también evita la
          propagación de enfermedades de transmisión genética y la frustración
          sexual.
        </Text>
      </View>
      <View>
        <Image
          source={require("../../assets/img/BenComportamiento.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title}>BENEFICIOS EN EL COMPORTAMIENTO</Text>
        <Text style={styles.text}>
          La esterilización reduce las hormonas sexuales como el estrógeno, la
          progesterona y la testosterona. Aunque las hormonas seguirán
          presentes, sus niveles serán inferiores, lo cual tiene un efecto
          directo en el comportamiento:
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          En los machos, se reduce la probabilidad de que orine donde no debe y
          presente otros comportamientos territoriales, como pelearse con otros
          gatos. Además, reduce la tendencia a vagar lejos de casa.
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          En las hembras, se puede reducir el interés en los gatos macho y su
          propensión a mostrarse excesivamente afectivas o agresivas.
        </Text>
      </View>
      <View>
        <Text style={styles.text}></Text>
      </View>
    </ScrollView>
  );
};

export default InfoUtil;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    /*     alignItems: "center", */
    backgroundColor: "white",
    marginBottom: 90,
    paddingBottom: 100,
  },
  image: {
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
  },
  text: {
    fontSize: 15,
    marginLeft: 7,
    marginRight: 7,
    textAlign: "center",
    marginTop: 5,
  },
  bold: { fontWeight: "bold" },
  title: {
    color: colors.primary,
    marginTop: 20,
    marginBottom: 5,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
