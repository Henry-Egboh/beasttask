import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" Component={About}></Route>
      </Routes>
    </div>
  );
}

export default App;
