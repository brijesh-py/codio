import { fetchFiles, saveFiles } from "../utils/editor";

export function generateUniqueID() {
  const id = Math.floor(Math.random() * 100000);
  return id;
}

export function handleActiveFile(state, actions) {
  const { id = "", name = "", code = "", type = "" } = actions.payload;
  if (!id || !name) return;

  state.activeFile = { id, name, code, type };
}

export function handleCreateFile(state, actions) {
  const { name, code = "" } = actions.payload;
  const isFileExist = state.files.findIndex((file) => file.name == name);
  if (isFileExist != -1) return;

  const id = generateUniqueID();
  const type = "code";
  state.files = [...state.files, { id, name, code, type }];

  actions.payload = { id, name, code, type };
  handleActiveFile(state, actions);
  handleSaveFiles(state);
}

export function handleUpdateFile(state, actions) {
  const { id, name, code, type } = actions.payload;
  if (!id || !name) return;

  state.files = state.files.map((file) => {
    if (file.id == id) {
      file.code = code;
    }
    return file;
  });

  actions.payload = { id, name, code, type };
  handleActiveFile(state, actions);
}

export function handleDeleteFile(state, actions) {
  const { id, name } = actions.payload;
  if (!id || !name) return;

  state.files = state.files.filter((file) => file.id != id);
  if (state.files.length === 0) {
    state.activeFile = null;
  } else {
    actions.payload = state.files[state.files.length - 1];
    handleActiveFile(state, actions);
  }

  handleSaveFiles(state);
}

export function handleRunCode(state) {
  let htmlCode = "",
    cssCode = "",
    jsCode = "";
  state.files.map((file) => {
    if (file.name.endsWith(".html") && file.type == "code") {
      htmlCode += file.code;
    }
    if (file.name.endsWith(".css") && file.type == "code") {
      cssCode += file.code;
    }
    if (file.name.endsWith(".js") && file.type == "code") {
      jsCode += file.code;
    }
  });

  state.code = {
    html: htmlCode,
    css: cssCode,
    js: jsCode,
  };
}

export function handleSaveFiles(state) {
  const files = state.files;
  saveFiles(files);
}

export function loadFiles(state) {
  const files = fetchFiles();
  state.files = files;
}

export function handleSherFiles(state, actions) {
  state.files = actions.payload;
  if (state.files.length === 0) {
    state.activeFile = null;
  } else {
    actions.payload = state.files[state.files.length - 1];
    handleActiveFile(state, actions);
  }
}
