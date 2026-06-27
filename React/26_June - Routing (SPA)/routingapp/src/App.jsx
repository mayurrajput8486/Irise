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
const Marketing = lazy(()=>import('./pages/career-pages/Marketing'))
const HR = lazy(()=>import('./pages/career-pages/HR'))
const Technical = lazy(()=>import('./pages/career-pages/Technical'))
const Nontechnical = lazy(()=>import('./pages/career-pages/Nontechnical'))
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
            <Route path="/career" element={<Career />}>
              <Route path="/career/marketing" element={<Marketing/>}/>
              <Route path="/career/hr" element={<HR/>}/>
              <Route path="/career/technical" element={<Technical/>}/>
              <Route path="/career/nontechnical" element={<Nontechnical/>}/>
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
