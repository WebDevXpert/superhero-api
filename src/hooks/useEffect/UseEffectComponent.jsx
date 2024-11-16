import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function UseEffectComponent() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("Random");
  //   const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    document.title = `New title : ${value}`;
    // console.log("useEffect logic rendered here");
    // window.addEventListener("resize", () => {
    //   console.log("Firing Event");
    //   setSize(window.innerWidth);
    // });
    // // setSize(window.innerWidth);
  }, [value]);
  console.log("Component Rendered now");
  return (
    <div className="text-center">
      <h1>useEffect Component</h1>
      <h1>{value}</h1>
      <Button onClick={() => setValue(value + 1)}>Click</Button>
      {/* <h1>{size}px</h1> */}
      <h1>{text}</h1>
      <Button onClick={() => setText("Hey Haris")}>Click</Button>
    </div>
  );
}

export default UseEffectComponent;
