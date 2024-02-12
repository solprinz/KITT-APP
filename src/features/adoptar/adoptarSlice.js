import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    gatos: [],
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
export const { setProductSelected } = adoptarSlice.actions;

export default adoptarSlice.reducer;
