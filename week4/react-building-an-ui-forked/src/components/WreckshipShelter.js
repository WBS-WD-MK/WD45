import AnimalContainer from "./AnimalContainer";
import ContactForm from "./ContactForm";
import cat from "../assets/cat.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import dog from "../assets/dog.jpg";
import dog2 from "../assets/dog2.jpg";
import dog3 from "../assets/dog3.jpg";
const WreckshipShelter = () => {
  const cats = [
    { name: "Tom", img: cat },
    { name: "Olly", img: cat2 },
    { name: "Oreo", img: cat3 }
  ];
  const dogs = [
    { name: "Tabby", img: dog },
    { name: "Billy", img: dog2 },
    { name: "Leila", img: dog3 }
  ];

  return (
    <>
      <AnimalContainer title={"Adopt a Cat!"} animals={cats} />
      <AnimalContainer title={"Adopt a Dog!"} animals={dogs} />
      <ContactForm />
    </>
  );
};

export default WreckshipShelter;
