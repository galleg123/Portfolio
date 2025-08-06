//import { Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
