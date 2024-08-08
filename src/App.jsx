import "./styles.css";
import Requirement2 from "./components/Requirement2";
import Requirement1 from "./components/Requirement1";

export default function App() {
  return (
    <div className="App">
      {/* <Requirement2 /> */}
      <Requirement1 />
      {/* I could have wokred more on the data model side, which will reduce the boilerplate code for each  */}
      {/* click handlers and storing the values. Also should have used stores but wanted little googling. */}
    </div>
  );
}
