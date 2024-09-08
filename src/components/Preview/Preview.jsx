import { LuRefreshCw } from "react-icons/lu";
import PreviewTabs from "../Tabs/PreviewTabs";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Preview = () => {
  const loadCode = useSelector((state) => state.editor.code);
  const [code, setCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setCode(() => ({
      html: loadCode?.html,
      css: loadCode?.css,
      js: loadCode?.js,
    }));
    const clear = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(clear);
    }, 1000);
  }, [loadCode]);

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
    ${code?.css || ""}
        </style>
      </head>
      <body>
        ${code?.html || ""}
        <script>
          ${code?.js || ""}
        </script>
      </body>
    </html>
  `;

  // Encode the content as a data URL
  const encodedHtml = `data:text/html;charset=utf-8,${encodeURIComponent(
    htmlContent
  )}`;

  return (
    <>
      <PreviewTabs />
      <div className="w-full">
        <div className="border-b border-zinc-700">
          <div className="flex items-center py-1">
            <ButtonIcon className={`text-base`}>
              <LuRefreshCw className={`${isLoading && "animate-spin"}`} />
            </ButtonIcon>
          </div>
        </div>
        <iframe
          src={encodedHtml}
          className="h-[89vh] bg-white w-full"
          sandbox="allow-scripts allow-modals"
          title="Live Preview"
        ></iframe>
      </div>
    </>
  );
};
export default Preview;
