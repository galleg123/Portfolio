import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/Portfolio/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
