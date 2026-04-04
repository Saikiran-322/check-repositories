import ModalWithGrid from "./ModalWithGrid";
import {Working,Broken,FixedCorrect,BrokenFixed} from "./Scrolls"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>AG Grid in Modal</h1>
      <ModalWithGrid />

      <h2>Simple working scroll</h2>
      <Working />

      <h2>Broken nested scroll</h2>
      <Broken />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {/* Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/broken-fixed">Broken Fixed</Link> |{" "}
          <Link to="/fixed-correct">Fixed Correct</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/broken-fixed" element={<BrokenFixed />} />
          <Route path="/fixed-correct" element={<FixedCorrect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;