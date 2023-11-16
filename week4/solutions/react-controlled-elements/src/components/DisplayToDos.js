import ToDo from "./ToDo";

const DisplayToDos = ({ todos, setTodos }) => {
  const toggleCompletion = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="block">
      <h3>My To-do List</h3>
      <div className="card-container">
        {todos
          .sort((a, b) => (a.done ? 1 : -1))
          .map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              toggleCompletion={toggleCompletion}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayToDos;
