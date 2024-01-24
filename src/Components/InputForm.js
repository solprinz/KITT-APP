import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Input,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const InputForm = ({
  placeholder,
  label,
  value,
  onChangeText,
  isSecure,
  error,
  title,
}) => {
  return (
    <Pressable>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
          placeholder={placeholder}
        >
          {label}
        </TextInput>

        <MaterialIcons
          style={styles.arrow}
          name="arrow-forward-ios"
          size={15}
          marginLeft={10}
        />
      </View>
    </Pressable>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    padding: 7,
  },
  title: {
    fontSize: 12,
    color: "grey",
    marginLeft: 5,
  },
  input: {
    width: 350,
    fontSize: 16,
  },
  arrow: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
});
