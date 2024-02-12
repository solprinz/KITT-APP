import { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  usePostProfileImageMutation,
  useGetProfileImageQuery,
} from "../app/services/adoptarService";
import { useSelector } from "react-redux";
import ButtonPrimary from "../Components/ButtonPrimary";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [triggerProfileImage] = usePostProfileImageMutation();
  const localId = useSelector((state) => state.auth.value.localId);
  const { data, isSuccess } = useGetProfileImageQuery(localId);

  useEffect(() => {
    if (isSuccess && data) setImage(data.image);
  }, [isSuccess]);
  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (granted) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.3,
        base64: true,
      });

      if (!result.canceled) {
        setImage("data:image/jpeg;base64," + result.assets[0].base64);
      }
    }
  };

  const confirmImage = () => {
    triggerProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : require("../../assets/img/Perfil.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <ButtonPrimary title="Tomar foto" onPress={pickImage} />
      <ButtonPrimary title="Guardar foto" onPress={confirmImage} />
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
