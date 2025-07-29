import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactDetail from "./pages/ContactDetail";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
