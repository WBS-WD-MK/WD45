import Instructions from "./instructions/Instructions";
import Header from "./components/Header";
import Thingy from "./components/Thingy";
import Display from "./components/Display";
import "./styles.css";

export default function App() {
  const log = (num) => {
    console.log("SOMETHING HERE??", num);
  };
  return (
    <div className="App">
      <Instructions />
      <div className="block">
        Insert your components here
        <Header title="React is Amazing!!!" />
        <Thingy a={3} b={4} />
        <Display log={log} />
      </div>
    </div>
  );
}
