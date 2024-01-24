import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useLoginMutation } from "../app/services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { colors } from "../global/colors";
import ButtonPrimary from "../Components/ButtonPrimary";
import ButtonSecondary from "../Components/ButtonSecondary";
import InputAuth from "../Components/InputAuth";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerLogin, { data, isError, isSuccess, error, isLoading }] =
    useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) dispatch(setUser(data));
    if (isError) console.log(error);
  }, [data, isError, isSuccess]);

  const onSubmit = () => {
    triggerLogin({ email, password });
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/img/Login.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <InputAuth
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error=""
        />
        <InputAuth
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error=""
        />
        <ButtonPrimary onPress={onSubmit} title="Iniciar sesión" />
        <Text style={styles.sub}>¿Aún no te has registrado?</Text>

        <ButtonSecondary
          title="Crear cuenta nueva"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
};

export default Login;

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
    marginTop: 40,
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
});
