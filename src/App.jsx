import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content" role="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
