import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, navigation, route }) => {
  /*   const back = () => {
    navigation.goBack();
  };  */

  return (
    <View style={styles.container}>
      <View>
        {/*   <Pressable onPress={() => navigation.goBack()} title="back">
        <Ionicons
          name="chevron-back"
          size={25}
          marginLeft={10}
          marginTop={50}
          style={styles.back}
        />
         </Pressable>  */}
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
