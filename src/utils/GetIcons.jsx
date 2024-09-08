import { GoDeviceDesktop } from "react-icons/go";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiJson } from "react-icons/si";
import { CiFileOn } from "react-icons/ci";

const GetIcons = ({ name, type }) => {
  if (type === "code") {
    if (name.endsWith(".html")) {
      return <FaHtml5 className="text-red-600" />;
    }
    if (name.endsWith(".css")) {
      return <FaCss3Alt className="text-sky-600" />;
    }
    if (name.endsWith(".json")) {
      return <SiJson className="text-yellow-600" />;
    }
    if (name.endsWith(".js")) {
      return <RiJavascriptFill className="text-yellow-600" />;
    }
    return <CiFileOn className="text-zinc-400" />;
  } else {
    return <GoDeviceDesktop className="text-zinc-300" />;
  }
};

export default GetIcons;
