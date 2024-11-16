import { Button } from "react-bootstrap";
function Example() {
  let name = "Random";
  function testing() {
    name = "Haris";
    console.log(name);
  }
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-center">{name}</h1>
      <Button
        className="bg-indigo-600 text-white py-1 px-2 rounded"
        // onclick="testing()"
        onClick={testing}
      >
        Click
      </Button>
    </div>
  );
}
export default Example;
