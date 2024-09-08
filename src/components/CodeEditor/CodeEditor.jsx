import CodeMirror from "@uiw/react-codemirror";
import CodeEditorTabs from "../Tabs/CodeEditorTabs";
import Statusbar from "../Statusbar/Statusbar";
import { useDispatch, useSelector } from "react-redux";
import { updateFile } from "../../store/slices/editorSlice";
import GetIcons from "../../utils/GetIcons";
import getLang from "../../utils/getLang";
import Welcome from "../welcome/Welcome";
import { dracula as theme } from "@uiw/codemirror-theme-dracula"; // Import theme

const CodeEditor = () => {
  const activeFile = useSelector((state) => state.editor.activeFile);
  const dispatch = useDispatch();

  const updateCodeHandler = (code) => {
    if (activeFile?.id && activeFile?.name) {
      const updateActiveFileCode = structuredClone(activeFile);
      updateActiveFileCode.code = code;

      dispatch(updateFile(updateActiveFileCode));
    }
  };

  return (
    <>
      <CodeEditorTabs />
      <section>
        <div className="flex items-center justify-between px-2">
          <span className="flex items-center gap-x-1 py-2">
            {activeFile?.name && (
              <>
                <GetIcons
                  name={activeFile?.name || ""}
                  type={activeFile?.type}
                />
                <span className="text-xs text-zinc-300">
                  {activeFile?.name}
                </span>
              </>
            )}
          </span>
        </div>
        {activeFile?.id && (
          <CodeMirror
            extensions={[getLang(activeFile)]}
            value={activeFile?.code || ""}
            height="85vh"
            theme={"dark"}
            onChange={updateCodeHandler} // Handle code changes
          />
        )}
        {!activeFile?.id && <Welcome />}
      </section>
      {activeFile?.id && <Statusbar />}
    </>
  );
};
export default CodeEditor;
