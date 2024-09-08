import { PiBracketsCurlyBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { IoCloudUploadOutline } from "react-icons/io5";

const StatusbarBTN = ({ className = "", label = "", children }) => {
  return (
    <button className="flex items-center py-1 gap-x-1 text-sm text-zinc-200 active:bg-zinc-800 px-2 border border-transparent active:border-sky-500">
      <span className={className}>{children}</span>
      <span className="text-xs">{label}</span>
    </button>
  );
};

const Statusbar = () => {
  const activeFile = useSelector((state) => state.editor.activeFile);

  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <StatusbarBTN
            className="text-sky-500"
            label={activeFile?.name.split(".")[1]}
          >
            <PiBracketsCurlyBold />
          </StatusbarBTN>
          <StatusbarBTN
            className="text-sky-500"
            label={"Saving"}
          >
            <IoCloudUploadOutline />
          </StatusbarBTN>
        </div>
      </div>
    </section>
  );
};

export default Statusbar;
