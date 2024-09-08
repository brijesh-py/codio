import { langs } from "@uiw/codemirror-extensions-langs";

const getLang = (activeFile) => {
  if (activeFile?.name?.endsWith(".html")) {
    return langs.html();
  }
  if (activeFile?.name?.endsWith(".css")) {
    return langs.css();
  }
  if (activeFile?.name?.endsWith(".js")) {
    return langs.javascript();
  }
  return langs.xml();
};

export default getLang;
