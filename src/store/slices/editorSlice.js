import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  handleActiveFile,
  handleCreateFile,
  handleDeleteFile,
  handleRunCode,
  handleSaveFiles,
  handleSherFiles,
  handleUpdateFile,
} from "../actions/editor";
import { fetchFiles } from "../utils/editor";

// First, create the thunk
export const loadFilesFromLocal = createAsyncThunk("loadFiles", () => {
  const response = fetchFiles();
  return response;
});
const initialState = {
  isVisibleEditor: false,
  isVisibleNewFileModal: false,
  isVisibleShareLinkModal: false,
  activeFile: null,
  code: null,
  files: [],
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadFilesFromLocal.fulfilled, (state, actions) => {
      const files = actions.payload;
      state.files = files;
      if (files) {
        state.activeFile = files[files.length - 1];
      }
    });
  },
  reducers: {
    setIsVisibleEditor: (state) => {
      state.isVisibleEditor = !state.isVisibleEditor;
    },
    setIsVisibleNewFileModal: (state) => {
      state.isVisibleNewFileModal = !state.isVisibleNewFileModal;
    },
    setIsVisibleShareLinkModal: (state) => {
      state.isVisibleShareLinkModal = !state.isVisibleShareLinkModal;
    },
    setShareFiles: handleSherFiles,
    createFile: handleCreateFile,
    deleteFile: handleDeleteFile,
    updateFile: handleUpdateFile,
    setActiveFile: handleActiveFile,
    runCode: handleRunCode,
    saveFiles: handleSaveFiles,
  },
});

export const {
  setIsVisibleEditor,
  setIsVisibleNewFileModal,
  setIsVisibleShareLinkModal,
  setShareFiles,
  createFile,
  deleteFile,
  updateFile,
  setActiveFile,
  runCode,
  saveFiles,
} = editorSlice.actions;
export default editorSlice.reducer;
