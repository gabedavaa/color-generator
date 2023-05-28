import Form from "./Form";
import Values from "values.js";
import ColorList from "./ColorList";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#ddd").all(10));

  const addColor = (color) => {
    console.log(color);
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />;
    </main>
  );
};
export default App;
