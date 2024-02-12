import { StyleSheet, Text, View, TextInput } from "react-native";

const InputAuth = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
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
    borderBottomWidth: 3,
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
