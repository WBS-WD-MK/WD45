import './App.css';
import Navbar from './components/Navbar';
import Students from './components/Students';

function App() {
  const username = 'john doe';
  const students = [
    { name: 'Anna', email: 'a@wbs.com', isStudent: true },
    { name: 'Miguel', email: 'm@wbs.com', isStudent: false },
    { name: 'Denis', email: 'd@wbs.com', isStudent: true },
    { name: 'Mihaela', email: 'mm@wbs.com', isStudent: false },
  ];
  const values = ['Asdasd', 'sdsdsd', 'sdwe'];
  return (
    <>
      <Navbar username={username} />
      <Students students={students} />
      {values.map(v => (
        <p key={v}>{v}</p>
      ))}
    </>
  );
}

export default App;
