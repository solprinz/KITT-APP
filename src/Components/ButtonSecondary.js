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
    width: "100%",
    backgroundColor: colors.secondary,
    padding: 10,
    alignItems: "enter",
    borderRadius: 10,
    margin: 5,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
