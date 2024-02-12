import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { colors } from "../global/colors";
import { useSignupMutation } from "../app/services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import ButtonPrimary from "../Components/ButtonPrimary";
import ButtonSecondary from "../Components/ButtonSecondary";
import InputAuth from "../Components/InputAuth";
import { insertSession } from "../database/index";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerSignup, { data, isError, isSuccess, error, isLoading }] =
    useSignupMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
      insertSession(data)
        .then((result) => console.log(result))
        .catch((err) => console.log(error));
    }
    if (isError) console.log(error);
  }, [data, isError, isSuccess]);

  const onSubmit = async () => {
    try {
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      await triggerSignup({ email, password }); // Espera la promesa
      await signupSchema.validate(
        { email, password, confirmPassword },
        { abortEarly: false }
      );
    } catch (error) {
      if (error.name === "ValidationError") {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setEmailError(errors.email || "");
        setPasswordError(errors.password || "");
        setConfirmPasswordError(errors.confirmPassword || "");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.main}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/img/Signup.png")}
          resizeMode="cover"
          style={styles.image}
        />

        <InputAuth
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={emailError}
        />
        <InputAuth
          label="Contraseña"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={passwordError}
        />
        <InputAuth
          label="Repetir contraseña"
          value={confirmPassword}
          onChangeText={(t) => setConfirmPassword(t)}
          isSecure={true}
          error={confirmPasswordError}
        />
        <ButtonPrimary title="Crear cuenta" onPress={onSubmit} />
        <Text style={styles.text}>¿Ya estás registrado?</Text>
        <ButtonSecondary
          title="Iniciar sesión"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  container: {
    width: "90%",
    gap: 10,
    alignItems: "center",
  },
  image: {
    height: "40%",
  },
  text: {
    fontSize: 14,
    marginTop: 10,
  },
});
