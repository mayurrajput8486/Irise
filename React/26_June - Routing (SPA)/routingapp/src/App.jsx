import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
/* import Home from "./pages/Home";
import About from "./pages/About";
import Career from './pages/Career';
import Contact from './pages/contact';
import ErrorPage from "./pages/ErrorPage"; */

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

/* 
const routesMap = [
  
] 
*/

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Suspense fallback={<h3 className="text-center text-primary">Loadding.....</h3>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
