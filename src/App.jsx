import ModalWithGrid from "./ModalWithGrid";
import {Working,Broken,FixedCorrect,BrokenFixed} from "./Scrolls"

function App() {
  return (
    <div>
      <h1>AG Grid in Modal</h1>
      <ModalWithGrid />

      <h2>Simple working scroll, without nesting</h2>
      <Working/>
      <h2>Broken scroll, with nesting scrolls</h2>
      <Broken/>
      <h2>Broken scroll, with position fixed</h2>
      <BrokenFixed/>
      {/* <h2>Working scroll, with position absolute</h2>
      <FixedCorrect/> */}
    </div>
  );
}

export default App;