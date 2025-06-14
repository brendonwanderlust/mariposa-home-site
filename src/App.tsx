import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Families from "./pages/Families";
import Home from "./pages/home/Home";
import Recruitment from "./pages/Recruitment";
import Resources from "./pages/Resources";
import Seniors from "./pages/Seniors";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" data-theme="mariposa">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seniors" element={<Seniors />} />
            <Route path="/families" element={<Families />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
