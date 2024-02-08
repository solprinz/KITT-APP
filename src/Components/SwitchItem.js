import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { colors } from "../global/colors";

const SwitchItem = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>

      <Switch
        style={styles.switch}
        trackColor={{ false: "grey", true: colors.primary }}
        /*  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"} */
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    padding: 7,
  },
  text: {
    width: 320,
    marginTop: 10,
    fontSize: 16,
    paddingBottom: 10,

    marginLeft: 10,
    marginTop: 10,
  },
  switch: {},
});
