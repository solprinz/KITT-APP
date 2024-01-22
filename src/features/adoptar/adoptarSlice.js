import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    /*     gatos: allCats, */
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
      state.value.productSelected = state.value.products.find(
        (item) => item.id === actions.payload
      );
    },
  },
});

export const { setProductSelected } = adoptarSlice.actions;

export default adoptarSlice.reducer;
