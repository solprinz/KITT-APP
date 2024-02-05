import { StyleSheet, FlatList, Pressable, Text, View } from "react-native";

import { colors } from "../global/colors";
import { useState, useEffect } from "react";
import CardItem from "../Components/CardItem";
import { useGetProductsQuery } from "../app/services/adoptarService";

const CatsList = ({ navigation, route }) => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [keyword, setKeyword] = useState("");
  const [items, setItems] = useState();

  /*   if (error) console.log(error);
  if (!isLoading) console.log(data); */
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
    /*  justifyContent: "center",
    alignItems: "center", */
    margin: 10,
  },
  list: {
    borderWidth: 1,
  },
});
