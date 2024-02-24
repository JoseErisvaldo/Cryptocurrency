import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Header from "./Components/Header";
import Marketplace from "./Pages/Marketplace";
import Footer from "./Components/Footer";

export default function RoutesApp () {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/marketplace" element={<Marketplace/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}