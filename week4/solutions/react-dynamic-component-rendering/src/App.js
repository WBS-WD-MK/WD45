import './styles.css';
import Instructions from './instructions/Instructions';
import users from './userData';
import User from './components/User';
export default function App() {
  return (
    <div className="App">
      <Instructions />
      <div className="block">
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
