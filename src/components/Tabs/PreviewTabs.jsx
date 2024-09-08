import { FiPlus } from "react-icons/fi";
import { CiMaximize1 } from "react-icons/ci";
import Tab from "./Tab";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { useDispatch } from "react-redux";
import { setIsVisibleEditor } from "../../store/slices/editorSlice";

const PreviewTabs = () => {
  const previewTabs = [{ type: "preview", id: 1, name: "Webview" }];
  const dispatch = useDispatch();

  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center">
        {previewTabs?.map((tab, key) => (
          <Tab tab={tab} key={key} />
        ))}
        <ButtonIcon className="text-sm">
          <FiPlus />
        </ButtonIcon>
      </div>
      <div>
        <ButtonIcon onClick={() => dispatch(setIsVisibleEditor())}>
          <CiMaximize1 />
        </ButtonIcon>
      </div>
    </section>
  );
};

export default PreviewTabs;
