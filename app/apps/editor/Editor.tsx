import { useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div className=" h-[500px] w-[250px] md:h-[450px] md:w-[600px] xl:h-[650px] xl:w-[1000px]">
      <QuillEditor
        className="h-[400px] w-[250px] md:h-[400px] md:w-[600px] xl:h-[600px] xl:w-[1000px] mb-8"
        theme="snow"
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default App;
