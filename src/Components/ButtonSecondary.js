import { StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../global/colors";

const ButtonSecondary = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ButtonSecondary;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    backgroundColor: colors.secondary,
    padding: 10,
    alignSelf: "center",
    borderRadius: 10,
    margin: 5,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
