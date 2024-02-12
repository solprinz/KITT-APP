import { StyleSheet, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Campo = ({ label }) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <MaterialIcons
        style={styles.arrow}
        name="arrow-forward-ios"
        size={15}
        marginLeft={10}
      />
    </Pressable>
  );
};

export default Campo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    padding: 7,
  },
  text: {
    width: 350,
    marginTop: 10,
    fontSize: 16,
    paddingBottom: 10,
  },
  arrow: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
});
