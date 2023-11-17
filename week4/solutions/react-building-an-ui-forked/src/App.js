import "./styles.css";
import Instructions from "./instructions/Instructions";
import WreckshipShelter from "./components/WreckshipShelter";
export default function App() {
  // The following three variables can be moved to different files
  // as you progress through the exercise.

  return (
    <>
      <div className="block">
        <h2>Wreckship Shelter</h2>
        <p>
          In our beautiful shelter we have lots of animals with quirky qualities
          to them. Are you in search of a challenge? Here you can find the
          perfect animal for you!
        </p>
        <WreckshipShelter />
      </div>
      {/* <Instructions /> */}
    </>
  );
}
