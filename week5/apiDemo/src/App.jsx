import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data =>
        setTimeout(() => {
          setTodos(data);
        }, 1000),
      )
      .catch(error => console.error(error));
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    setTodos(todos => [{ title, id: uuidv4() }, ...todos]);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button>Add Todo</button>
      </form>

      {todos.length > 0 ? (
        todos.map(todo => (
          <div key={todo.id} className="card">
            {todo.title}
          </div>
        ))
      ) : (
        <p>fetching todos....</p>
      )}
    </>
  );
}

export default App;
