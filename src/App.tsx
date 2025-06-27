import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Contact from "./pages/contact/Contact";
import Families from "./pages/families/Families";
import Home from "./pages/home/Home";
import Recruitment from "./pages/recruitment/Recruitment";
import Resources from "./pages/resources/Resources";
import Seniors from "./pages/seniors/Seniors";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" data-theme="mariposa">
      <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seniors" element={<Seniors />} />
            <Route path="/families" element={<Families />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
