import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import { colors } from "../global/colors";
import { useSignupMutation } from "../app/services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import ButtonPrimary from "../Components/ButtonPrimary";
import ButtonSecondary from "../Components/ButtonSecondary";
import InputAuth from "../Components/InputAuth";

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
    if (isSuccess) dispatch(setUser(data));
    if (isError) console.log(error);
  }, [data, isError, isSuccess]);

  const onSubmit = () => {
    try {
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      signupSchema.validateSync({ email, password, confirmPassword });
      triggerSignup({ email, password });
    } catch (error) {
      console.log(error.path);
      console.log(error.message);
      switch (error.path) {
        case "email":
          setEmailError(error.message);
          break;
        case "password":
          setPasswordError(error.message);
          break;
        case "password":
          setConfirmPasswordError(error.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
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
        <Text style={styles.sub}>¿Ya estás registrado?</Text>
        <ButtonSecondary
          title="Iniciar sesión"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  container: {
    width: "90%",
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    height: "40%",
  },
  title: {
    fontSize: 22,
  },
  sub: {
    fontSize: 14,
    marginTop: 10,
  },
  button: {
    width: "100%",
    backgroundColor: colors.secondary,
    padding: 10,
    alignItems: "enter",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  buttonback: {
    backgroundColor: "black",
  },
});
