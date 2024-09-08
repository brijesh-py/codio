import { IoMdClose } from "react-icons/io";
import GetIcons from "../../utils/GetIcons";
import { useDispatch, useSelector } from "react-redux";
import { deleteFile, setActiveFile } from "../../store/slices/editorSlice";

const Tab = ({ tab }) => {
  const dispatch = useDispatch();
  const activeFile = useSelector((state) => state.editor.activeFile);
  const activeFileClass = `bg-zinc-900 border-t border-t-sky-500 border-b-zinc-900`;

  const activeFileHandler = () => {
    dispatch(setActiveFile(tab));
  };

  const deleteFileHandler = () => {
    dispatch(deleteFile(tab));
  };

  return (
    <span
      id={tab?.id}
      className={`group flex items-center bg-zinc-800 w-fit px-1 border border-b-zinc-500 border-r-zinc-500 border-transparent ${
        activeFile?.id == tab?.id && activeFileClass
      }`}
    >
      <button
        className="flex items-center gap-x-1 py-1 me-1"
        onClick={activeFileHandler}
      >
        <GetIcons name={tab?.name} type={tab?.type} />
        <span className="text-[13px] text-zinc-400 group-hover:text-zinc-200 group-active:text-zinc-100">
          {tab?.name}
        </span>
      </button>
      <button
        className=" text-sm text-transparent p-0.5 rounded-full hover:text-zinc-200 hover:bg-zinc-800 group-hover:text-zinc-500 group-active:text-zinc-100"
        onClick={deleteFileHandler}
      >
        <IoMdClose />
      </button>
    </span>
  );
};

export default Tab;
