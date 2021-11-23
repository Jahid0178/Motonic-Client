import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About/About";
import Services from "./Pages/Services/Services/Services";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact/Contact";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
