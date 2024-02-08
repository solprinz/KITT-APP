import { createSlice } from "@reduxjs/toolkit";
import allGatos from "../../Data/gatos.json";
import { useGetProductQuery } from "../../app/services/adoptarService";

const initialState = {
  value: {
    gatos: allGatos,
    productSelected: null,
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
/* export const adoptarSlice = createSlice({
  name: "adoptar",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.value.gatos = action.payload;
    },
    setProductSelected: (state, action) => {
      state.value.productSelected = state.value.gatos.find(
        (product) => product.id === action.payload
      );
    },
  },
});
 */
export const { setProductSelected /* setProducts  */ } = adoptarSlice.actions;

export default adoptarSlice.reducer;
