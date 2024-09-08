import { useSelector } from "react-redux";
import NewFileModal from "./newFileModal/NewFileModal";
import ShareLinkModal from "./shareLinkModal/ShareLinkModal";

const ModalWrapper = () => {
  const isVisibleNewFileModal = useSelector(
    (state) => state.editor.isVisibleNewFileModal
  );
  const isVisibleShareLinkModal = useSelector(
    (state) => state.editor.isVisibleShareLinkModal
  );

  return (
    <div
      className={`${
        !(isVisibleNewFileModal || isVisibleShareLinkModal) && "hidden"
      }  fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen bg-zinc-900/70 `}
    >
      {isVisibleNewFileModal && <NewFileModal />}
      {isVisibleShareLinkModal && <ShareLinkModal />}
    </div>
  );
};

export default ModalWrapper;
