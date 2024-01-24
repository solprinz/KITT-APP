import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../global/colors";

const InputAuth = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={isSecure}
      />
      {error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default InputAuth;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "90%",
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: colors.green3,
    padding: 2,

    fontSize: 14,
    marginHorizontal: "5%",
    marginVertical: 5,
  },
  titleInput: {
    width: "90%",
    marginHorizontal: "5%",
    fontSize: 16,
  },
  error: {
    fontSize: 16,
    color: "red",
    fontStyle: "italic",
    marginLeft: 20,
  },
});
