import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useLoginMutation } from "../app/services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { colors } from "../global/colors";
import ButtonPrimary from "../Components/ButtonPrimary";
import ButtonSecondary from "../Components/ButtonSecondary";
import InputAuth from "../Components/InputAuth";
import { insertSession } from "../database";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerLogin, { data, isError, isSuccess, error, isLoading }] =
    useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
      console.log(data);
      insertSession(data)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
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
  sub: {
    fontSize: 14,
    marginTop: 40,
    textAlign: "center",
  },
  error: {
    color: "red",
  },
});
