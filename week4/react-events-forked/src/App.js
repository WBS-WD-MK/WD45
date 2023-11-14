import "./styles.css";
import Instructions from "./instructions/Instructions";
import SuperButton from "./components/SuperButton";
import Search from "./components/Search";
import CreatePost from "./components/CreatePost";

export default function App() {
  return (
    <>
      <Instructions />
      <div className="block buttons">
        <SuperButton text={"change me!"} alertText={"what whatt"} />
      </div>
      <div className="block buttons">
        <Search />
      </div>
      <div className="block buttons">
        <CreatePost />
      </div>
    </>
  );
}
