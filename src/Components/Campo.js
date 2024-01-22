import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Campo = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressContainer}>
        <Text style={styles.text}>
          {label}
          <View style={styles.arrow}>
            <MaterialIcons
              style={styles.arrow}
              name="arrow-forward-ios"
              size={15}
            />
          </View>
        </Text>
      </Pressable>
    </View>
  );
};

export default Campo;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
  },
  pressContainer: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    flexDirecion: "row",
  },
  text: {
    marginHorizontal: "5%",
    fontSize: 16,
    margin: 10,
  },
  arrow: {},
});
