
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About"; 
import Navbar from './components/Navbar';
import ErrorPage from "./pages/ErrorPage";
import ForgotPassword from "./pages/ForgotPassword"; // Import the ForgotPassword component

const App = () => {
  const location = useLocation();

  // Define an array of valid paths
  const validPaths = ["/", "/about", "/contact", "/service", "/register", "/login", "/forgot-password"];
  
  // Check if the current path is one of the valid paths
  const isValidPath = validPaths.includes(location.pathname);

  return ( 
    <>
      {isValidPath && <Navbar />} {/* Render Navbar only if on a valid path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;