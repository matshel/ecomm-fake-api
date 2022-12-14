import React from "react";

// import router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

// import components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // aos init
  Aos.init({
    duration: 1800,
    offset: onabort,
  });
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
