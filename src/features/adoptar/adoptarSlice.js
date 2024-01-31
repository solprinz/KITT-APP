import { createSlice } from "@reduxjs/toolkit";
import allGatos from "../../Data/gatos.json";

const initialState = {
  value: {
    gatos: allGatos,
    productSelected: {},
    /*     productsFilteredByCategory: [],
     */
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
