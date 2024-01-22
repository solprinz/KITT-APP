import { StyleSheet, FlatList, Pressable, Text, View } from "react-native";

import { colors } from "../global/colors";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardItem from "../Components/CardItem";
import { useGetProductsQuery } from "../app/services/adoptarService";

const CatsList = ({ navigation, route }) => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [keyword, setKeyword] = useState("");

  if (error) console.log(error);
  if (!isLoading) console.log(data);
  const [gatos, setGatos] = useState();

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardItem item={item} />}
          style={styles.list}
        />
      </View>
    </>
  );
};

export default CatsList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    color: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flexDirection: "column",
  },
});