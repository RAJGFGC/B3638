import { Link, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>College Portal App</h1>
      <nav style={{ marginBottom: "20px", display: "flex", gap: "15px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
        <Link to="/courses" style={{ marginRight: "10px" }}>Courses</Link>
        <Link to="/contact" style={{ marginRight: "10px" }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
