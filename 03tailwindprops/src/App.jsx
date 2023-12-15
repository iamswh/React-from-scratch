// Discussion about passing and handling props

import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 rounded-xl p-4 mb-4">Tailwind CSS</h1>
      <Card username="Boat" btnText="Click Me" />
      <Card username="Ship" btnText="Visit Me" />
    </>
  );
}

export default App;
