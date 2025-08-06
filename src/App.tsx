//import { Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
