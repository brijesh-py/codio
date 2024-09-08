import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { config } from "../constants";

const useGenerateLink = () => {
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const files = useSelector((state) => state.editor.files);

  const generateLink = async () => {
    try {
      setIsLoading(true);
      const api = `${config.apiEndPoint}`;
      const response = await axios.post(api, {
        files: JSON.stringify(files),
      });
      const id = response?.data?.id;
      if (id) {
        setLink(id);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return { link, isLoading, error, generateLink };
};

export default useGenerateLink;
