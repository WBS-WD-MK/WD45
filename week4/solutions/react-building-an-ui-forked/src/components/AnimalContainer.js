import AnimalCard from "./AnimalCard";

const AnimalContainer = ({ title, animals }) => {
  return (
    <section className="animalContainer">
      <h3>{title}</h3>
      <div className="cardsContainer">
        {animals.map((animal) => (
          <AnimalCard key={animal.name} animal={animal} />
        ))}
      </div>
    </section>
  );
};

export default AnimalContainer;
