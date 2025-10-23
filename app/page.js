"use client";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";



export default function Home() {
  return (
    <div className="max-w-6xl mx-auto w-[90%]"> 
  {/* Gradient Blobs */}
  <div
    className="fixed top-0 right-0 w-48 h-48 md:w-96 md:h-96 
               bg-gradient-to-bl from-purple-300 via-purple-400 to-purple-500 
               rounded-b-full blur-2xl opacity-40 animate-pulse"
  ></div>

  <div
    className="fixed top-0 left-0 w-48 h-48 md:w-96 md:h-96 
               bg-gradient-to-bl from-purple-200 via-purple-300 to-purple-400 
               rounded-b-full blur-3xl opacity-30 animate-pulse"
    style={{ animationDelay: "1s" }}
  ></div>

      {/* Components */}
    <Navbar />
    <Hero />
    <Portfolio />
    <About />
    <Resume />
    <Contact />
    <Footer />
    
    </div>
  );
}
