import axios from "axios";
import { config } from "../constants";

const GetFiles = async (codeID) => {
  try {
    const api = `${config.apiEndPoint}${codeID}`;
    const response = await axios.get(api);
    const files = response?.data?.files;
    if (files) return files;
    return [];
  } catch (error) {
    console.log(error);
  }
};

export default GetFiles;
