import { StyleSheet, FlatList, View } from "react-native";

import { colors } from "../global/colors";
import { useState } from "react";
import CardItem from "../Components/CardItem";
import { useGetProductsQuery } from "../app/services/adoptarService";

const CatsList = ({ navigation, route }) => {
  const { data, isLoading, error } = useGetProductsQuery();

  if (error) console.log(error);

  const [gatos, setGatos] = useState();

  return (
    <>
      <View style={styles.container}>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <CardItem item={item} navigation={navigation} route={route} />
            )}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    </>
  );
};

export default CatsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 90,
    color: colors.secondary,
    justifyContent: "center",
  },
});
