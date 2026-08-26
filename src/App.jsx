import "./App.css";
import { Route, Routes } from "react-router";
import All from "./components/All";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Blogpost from "./components/Blogpost";
import NewI from "./components/NewI";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/about-loct" element={<About />} />
        <Route path="/new" element={<NewI />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blogpost />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
