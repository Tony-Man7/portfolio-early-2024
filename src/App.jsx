import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Certificates from "./components/Certificates";
import Technologies from "./components/Technologies";
import Proverb from "./components/Proverb";
import React, { useState, useEffect } from "react";
import Spinner from "./Spinner.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {   
    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  }, []);

  return (
    <div className="overflow-hidden">
      {loading ? (
          <Spinner />
      ) : (
        <>
          <Header />
          <div className="max-w-7xl mx-auto">
            <Home />
            <About />
            <Qualification />
            <Certificates />
            <Projects />
            <Technologies />
          </div>
          <div>
            <Proverb />
          </div>
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
