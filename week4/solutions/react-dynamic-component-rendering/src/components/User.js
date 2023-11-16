import Contact from './Contact';

const User = ({ user }) => {
  const { picture, name, age, ...contact } = user;

  return (
    <div className="userProfile">
      <img src={picture} alt={name} />
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <Contact contact={contact} />
      </div>
    </div>
  );
};

export default User;
