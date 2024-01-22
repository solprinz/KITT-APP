import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../global/colors";

const TabIcon = ({ icon, label, focused }) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={30} color={focused ? colors.primary : "grey"} />
      <Text
        style={{
          ...styles.text,
          ...{ color: focused ? colors.primary : "grey" },
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
