export function saveFiles(files) {
  try {
    localStorage.setItem("files", JSON.stringify(files));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function fetchFiles() {
  try {
    const files = JSON.parse(localStorage.getItem("files"));
    return files || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
