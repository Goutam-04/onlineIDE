import { useEffect, useState } from "react";

export const useResponsiveEditor = () => {
  const [editorWidth, setEditorWidth] = useState("60vw");
  const [editorHeight, setEditorHeight] = useState("90vh");
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth > 768 ? "60vw" : "98vw";
      const newHeight = window.innerWidth > 768 ? "90vh" : "70vh";
      const newFontSize = window.innerWidth < 768 ? 10 : 16;

      setEditorWidth(newWidth);
      setEditorHeight(newHeight);
      setFontSize(newFontSize);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { editorWidth, editorHeight, fontSize, setFontSize };
};
