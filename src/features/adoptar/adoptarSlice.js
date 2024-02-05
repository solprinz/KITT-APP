import { createSlice } from "@reduxjs/toolkit";
import allGatos from "../../Data/gatos.json";
import {
  useGetProductQuery,
  useGetProductsQuery,
} from "../../app/services/adoptarService";
/* 
const { data, isLoading, error } = useGetProductQuery(); */

const initialState = {
  value: {
    gatos: allGatos,
    /*     gatos: data, */
    productSelected: {},
  },
};

export const adoptarSlice = createSlice({
  name: "adoptar",
  initialState,
  reducers: {
    setProductSelected: (state, actions) => {
      state.value.productSelected = state.value.gatos.find(
        (product) => product.id === actions.payload
      );
    },
  },
});

export const { setProductSelected } = adoptarSlice.actions;

export default adoptarSlice.reducer;
