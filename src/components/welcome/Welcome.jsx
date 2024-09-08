import { FaLaptopCode } from "react-icons/fa6";
import {
  createFile,
  setIsVisibleNewFileModal,
} from "../../store/slices/editorSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const Welcome = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const openFileHandler = () => {
    const element = ref?.current;
    if (element) {
      element.click();
    }
  };

  const importFileHandler = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes("text")) {
      // Read file data
      const reader = new FileReader();
      reader.onload = function (e) {
        // Access the file content here
        const code = e.target.result;
        dispatch(createFile({ name: file.name, code }));
      };

      // Read the file as text or any format you want
      reader.readAsText(file);
    }
  };
  return (
    <div className=" border-t border-zinc-800 h-[91vh]">
      <div className="text-center w-full mt-10">
        <h1 className="mx-auto w-fit text-[130px] text-zinc-700">
          <FaLaptopCode />
        </h1>
        <div>
          <ul className="space-y-2 text-sky-700 list-disc w-fit mx-auto">
            <li
              className="cursor-pointer hover:text-sky-500"
              onClick={() => dispatch(setIsVisibleNewFileModal())}
            >
              Create File
            </li>
            <li className="hidden">
              <input
                ref={ref}
                type="file"
                onChange={(e) => importFileHandler(e)}
              />
            </li>
            <li
              onClick={openFileHandler}
              className="cursor-pointer hover:text-sky-500"
            >
              Import File
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
