import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./slices/editorSlice";
import previewReducer from "./slices/previewSlice";

const store = configureStore({
  reducer: {
    editor: editorReducer,
    preview: previewReducer,
  },
});

export default store;
