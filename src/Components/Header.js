import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    margipTop: 20,
    height: 88,
  },
  back: {
    flexDirection: "row",
    width: "50%",
  },
  title: {
    textAlign: "center",
    fontSize: 17,
    width: "100%",
    marginTop: 50,
  },
});
