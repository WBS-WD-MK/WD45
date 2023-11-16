const ToDo = ({ todo, toggleCompletion }) => {
  return (
    <div className={`card ${todo.priority} ${todo.done}`}>
      <h3>{todo.title}</h3>
      <p>
        <b>Deadline:</b> {todo.deadline}
      </p>
      <label htmlFor={`todo_${todo.id}`}>Done?</label>
      <input
        id={`todo_${todo.id}`}
        name={todo.title}
        type="checkbox"
        value={todo.title}
        checked={todo.done}
        onChange={() => toggleCompletion(todo.id)}
      />
    </div>
  );
};
export default ToDo;
