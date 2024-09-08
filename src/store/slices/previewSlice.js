import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisiblePreview: false,
};

const previewSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setIsVisiblePreview: (state) => {
      state.isVisiblePreview = !state.isVisiblePreview;
    },
  },
});

export const { setIsVisiblePreview } = previewSlice.actions;
export default previewSlice.reducer;
