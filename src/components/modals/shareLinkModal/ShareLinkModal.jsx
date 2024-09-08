import { PiPaperclipBold } from "react-icons/pi";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import useGenerateLink from "../../../hooks/useGenerateLink";
import { GrRefresh } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { setIsVisibleShareLinkModal } from "../../../store/slices/editorSlice";
import { useRef } from "react";

const ShareLinkModal = () => {
  const { link, isLoading, error, generateLink } = useGenerateLink();
  const dispatch = useDispatch();
  const ref = useRef(null);

  const generateLinkHandler = () => {
    generateLink();
  };

  const copyLinkHandler = () => {
    const element = ref?.current;
    if (element) {
      navigator.clipboard.writeText(element.innerText);
    }
  };

  return (
    <div className="w-[400px] bg-zinc-800 shadow-md border  border-zinc-600 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-600">
        <button
          className="px-3 py-1 text-sm font-bold text-white rounded hover:bg-zinc-700 active:bg-zinc-900 "
          onClick={() => dispatch(setIsVisibleShareLinkModal())}
        >
          Cancel
        </button>
        <h3 className="text-base font-bold text-zinc-200">
          Generate Share Link
        </h3>
        <button
          className="px-3 py-1 text-sm font-bold text-white rounded bg-sky-600 hover:bg-sky-800 active:bg-sky-900"
          onClick={generateLinkHandler}
        >
          {isLoading && <GrRefresh className="animate-spin" />}
          {!isLoading && "Generate"}
        </button>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-center">
          <div className={`border border-zinc-700 rounded shadow-md`} ref={ref}>
            <span className="bg-green-900/30 p-1 rounded text-sm text-green-500">
              {location.href}?code=
            </span>
            <span className="bg-sky-900/30 p-1 rounded text-sm text-sky-500">
              {link}
            </span>
          </div>
          <ButtonIcon onClick={copyLinkHandler} disabled={!link}>
            <PiPaperclipBold />
          </ButtonIcon>
        </div>
      </div>
    </div>
  );
};

export default ShareLinkModal;
