import { Outlet, useParams } from "react-router-dom";
import { CodeEditor, ModalWrapper, Preview } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GetFiles from "./services/getFiles";
import { setShareFiles } from "./store/slices/editorSlice";

const Layout = () => {
  const isVisibleEditor = useSelector((state) => state.editor.isVisibleEditor);
  const isVisiblePreview = useSelector(
    (state) => state.preview.isVisiblePreview
  );
  const dispatch = useDispatch();
  const { codeID } = useParams();

  const loadShareFiles = async () => {
    const files = await GetFiles(codeID);
    if (files) {
      dispatch(setShareFiles(JSON.parse(files)));
    }
  };

  useEffect(() => {
    codeID && loadShareFiles();
  }, [codeID]);

  return (
    <>
      <ModalWrapper />
      <main className="px-1 flex w-full gap-x-1">
        <div
          className={`${
            isVisibleEditor && "hidden"
          } rounded-md overflow-hidden bg-zinc-900 w-full border border-zinc-800`}
        >
          <CodeEditor />
        </div>
        <Outlet />
        <div
          className={`${
            isVisiblePreview && "hidden"
          } rounded-md overflow-hidden bg-zinc-900 w-full border border-zinc-800`}
        >
          <Preview />
        </div>
      </main>
    </>
  );
};

export default Layout;
