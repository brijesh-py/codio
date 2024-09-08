import { useDispatch } from "react-redux";
import {
  createFile,
  setIsVisibleNewFileModal,
} from "../../../store/slices/editorSlice";
import { useForm } from "react-hook-form";

const NewFileModal = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const createFileHandler = ({ name }) => {
    dispatch(createFile({ name }));
    reset();
    dispatch(setIsVisibleNewFileModal());
  };

  return (
    <div className="w-[400px] bg-zinc-800 shadow-md border  border-zinc-600 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-600">
        <button
          className="px-3 py-1 text-sm font-bold text-white rounded hover:bg-zinc-700 active:bg-zinc-900 "
          onClick={() => dispatch(setIsVisibleNewFileModal())}
        >
          Cancel
        </button>
        <h3 className="text-base font-bold text-zinc-200">File Name</h3>
        <button className="px-3 py-1 text-sm font-bold text-white rounded bg-sky-600 hover:bg-sky-800 active:bg-sky-900">
          Create
        </button>
      </div>
      <form
        action=""
        className="p-3"
        onSubmit={handleSubmit(createFileHandler)}
      >
        <div>
          <input
          autoComplete="off"
            {...register("name", {
              required: true,
            })}
            className="w-full px-2 text-sm py-1 text-white rounded-lg border-2 border-sky-600 bg-zinc-900/30 outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default NewFileModal;
