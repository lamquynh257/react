import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const TextEditor = ({ setValue }) => {
  const editor = useRef(null);

  return (
    <div>
      {/* <JoditEditor ref={editor} onChange={(content) => setValue(content)} /> */}
      <JoditEditor />
    </div>
  );
};

export default TextEditor;
