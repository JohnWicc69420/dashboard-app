import { useRef, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState("");
  const editorRef = useRef<ReactQuill>(null);
  const isFirstChange = useRef(true);

  return (
    <div style={{ width: "700px", height: "500px", color: "#CED2D8" }}>
      <ReactQuill
        ref={editorRef}
        theme="snow"
        value={value}
        style={{ width: "100%", height: "400px", color: "#CED2D8" }}
        onChange={(content) => {
          if (isFirstChange.current) {
            isFirstChange.current = false;
            return;
          }
          setValue(content);
        }}
      />
    </div>
  );
}

export default App;
