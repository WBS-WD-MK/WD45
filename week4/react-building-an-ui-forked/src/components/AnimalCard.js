const AnimalCard = ({ animal }) => {
  const age = () => Math.floor(Math.random() * (10 - 1) + 1);
  return (
    <div className="card">
      <img src={animal.img} alt={animal.name} />
      <h4>{animal.name}</h4>
      <p>
        {animal.name} is a loving companion who is {age()} years old. Take it
        home!
      </p>
    </div>
  );
};

export default AnimalCard;
