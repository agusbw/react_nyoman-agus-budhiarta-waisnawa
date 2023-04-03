import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [
      {
        uuid: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        name: "Iphone 11",
        category: "Phone",
        freshness: "new",
        price: "1000",
        image: "img-dummy",
        description: "Tambahan",
      },
    ],
  },
  reducers: {
    insert: (state, action) => {
      state.list.push(action.payload);
    },
    update: (state, action) => {
      const index = state.list.findIndex(
        (item) => item.uuid === action.payload.uuid
      );
      state.list[index] = action.payload;
    },
    remove: (state, action) => {
      state.list = state.list.filter((item) => item.uuid !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { insert, update, remove } = productSlice.actions;

export default productSlice.reducer;
