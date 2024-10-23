"use client"
import Image from "next/image";
import Home from "./component/custom/Home";
import About from "./component/custom/About";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function HomePage() {
  return (
    <div> 
    <Home/>
    <About/>
    <Skills/>
    <Education/>
    <Contact/>
    <Footer/>   
    </div>
  );
}
