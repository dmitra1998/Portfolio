'use client'
import { useEffect } from "react";
import About from "../../components/About";
import Achievements from "../../components/Achievements";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Review from "../../components/Review";


export default function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
  }, []);

  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Review/>
      <Footer/>
    </>
  );
}
