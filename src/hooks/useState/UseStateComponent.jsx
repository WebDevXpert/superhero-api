import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function UseStateComponent() {
  const [value, setValue] = useState(0);
  // const [text, setText] = useState("Random");
  // console.log(text);
  // function changeName() {
  //   setText("Haris");
  // }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function increment() {
    setValue(value + 1);
  }
  function decrement() {
    if (value < 1) {
      setValue(0);
      handleShow();
    } else {
      setValue(value - 1);
    }
  }
  function reset() {
    setValue(0);
  }
  console.log(useState());
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-center">useState Hook</h1>
      {/* <h1 className="text-3xl font-bold text-center">{text}</h1>
      <Button variant="success" onClick={changeName}>
        Click
      </Button> */}
      <h1 className="text-3xl font-bold text-center">{value}</h1>
      <button
        className="bg-green-800 text-white py-1 px-2 rounded-sm mx-2"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-red-800 text-white py-1 px-2 rounded-sm mx-2"
        onClick={reset}
      >
        Reset
      </button>
      <button
        className="bg-yellow-600 text-white py-1 px-2 rounded-sm mx-2"
        onClick={decrement}
      >
        Decrement
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>UseState</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have reached the minimum limit!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
