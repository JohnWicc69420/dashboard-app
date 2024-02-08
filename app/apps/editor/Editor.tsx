import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const App = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, []);

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
