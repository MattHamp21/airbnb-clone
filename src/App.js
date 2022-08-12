import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageWrapper from "./PageWrapper";
import Home from "./Pages/Home";
import Banner from "./Pages/Banner";

function App() {
  return (
    <div className="container">
      <PageWrapper />
      <Home />
      <Banner />
    </div>
  );
}

export default App;
