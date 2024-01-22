import { StyleSheet, FlatList, Pressable, Text, View } from "react-native";

import { colors } from "../global/colors";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
/* import { useGetProductsQuery } from "../app/services/shopServices"; */

const ItemListCategories = ({ navigation, route }) => {
  /* const productsFilteredByCategory = useSelector(
    (state) => state.shop.value.productsFilteredByCategory
  ); */
  const { category } = route.params;
  const { data, isLoading, error } = useGetProductsQuery(category);
  const [keyword, setKeyword] = useState("");

  //modificacion
  if (error) console.log(error);
  if (!isLoading) console.log(data);
  const [products, setProducts] = useState();

  useEffect(() => {
    if (!isLoading) {
      const dataArray = Object.values(data);
      const productsFiltered = dataArray.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    }
  }, [keyword, data]);

  /*   useEffect(() => {
    const productsFiltered = productsFilteredByCategory.filter((product) =>
      product.title.includes(keyword)
    );
    setProducts(productsFiltered);
  }, [keyword, productsFilteredByCategory]); */

  return (
    <>
      <View style={styles.container}>
        <Search setKeyword={setKeyword} />
        <Pressable
          style={styles.goBack}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>VER TODAS LAS CATEGORIAS</Text>
        </Pressable>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem item={item} navigation={navigation} route={route} />
          )}
        />
      </View>
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.background,
    color: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.accent,
    textAlign: "center",
    margin: 10,
  },
  goBack: {
    fontSize: 50,
    width: "60%",
    height: 40,
    borderRadius: 10,
    margin: 10,
  },
});
