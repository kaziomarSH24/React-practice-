import "./App.css";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <Clock locale="en-GB" />
      <Clock locale="bn-BD" />
    </div>
  );
}

export default App;
