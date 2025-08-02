import { Editor } from "@monaco-editor/react";

const MonacoEditorBox = ({ code, fontSize, language, theme, onChange, editorWidth, editorHeight }) => (
  <Editor
    options={{ fontSize }}
    height={editorHeight}
    width={editorWidth}
    language={language}
    value={code}
    theme={theme.value}
    onChange={onChange}
  />
);

export default MonacoEditorBox;
