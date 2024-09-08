import { FiPlus } from "react-icons/fi";
import { CiMaximize1 } from "react-icons/ci";
import { VscDebugRerun } from "react-icons/vsc";
import Tab from "./Tab";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import { setIsVisiblePreview } from "../../store/slices/previewSlice";
import {
  runCode,
  setIsVisibleNewFileModal,
  setIsVisibleShareLinkModal,
} from "../../store/slices/editorSlice";
import { CiSaveUp1 } from "react-icons/ci";
import { saveFiles } from "../../store/slices/editorSlice";
import { FaLaptopCode } from "react-icons/fa6";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CodeEditorTabs = () => {
  const files = useSelector((state) => state.editor.files);
  const dispatch = useDispatch();

  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center">
        <Link
          to={"/"}
          className="flex items-center  text-sky-500 font-bold px-3 bg-zinc-700 py-1 border border-sky-500 rounded-t"
        >
          <FaLaptopCode className="text-xl me-2" />
          <span className="text-sm text-green-400">Codio</span>
        </Link>
        {files?.map((tab, key) => (
          <Tab tab={tab} key={key} />
        ))}
        <ButtonIcon
          className="text-sm"
          onClick={() => dispatch(setIsVisibleNewFileModal())}
        >
          <FiPlus />
        </ButtonIcon>
      </div>
      <div>
        {files.length != 0 && (
          <>
            <ButtonIcon
              className="text-green-700 hover:text-green-400"
              onClick={() => dispatch(runCode())}
            >
              <VscDebugRerun />
            </ButtonIcon>
            <ButtonIcon onClick={() => dispatch(saveFiles())}>
              <CiSaveUp1 />
            </ButtonIcon>
            <ButtonIcon onClick={() => dispatch(setIsVisibleShareLinkModal())}>
              <RiShareForwardLine className="text-zinc-400" />
            </ButtonIcon>
          </>
        )}
        <ButtonIcon onClick={() => dispatch(setIsVisiblePreview())}>
          <CiMaximize1 />
        </ButtonIcon>
      </div>
    </section>
  );
};

export default CodeEditorTabs;
