import "./styles.css";
import { useState } from "react";
import Instructions from "./Instructions/Instructions";
import DisplayToDos from "./components/DisplayToDos";
import Form from "./components/Form";

export default function App() {
  // This state should contain the array of to-dos
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Walk the dog!",
      deadline: "20/06/2023",
      priority: "high",
      done: false
    }
  ]);

  return (
    <div className="App">
      <Instructions />
      <Form />
      <DisplayToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}
