import { useState, useEffect } from 'react';
import './Hero.css';
import bg1 from '../assets/back1.jpg';
import bg2 from '../assets/back2.jpg';
import bg3 from '../assets/back3.jpg';

const slides = [
  { image: bg1, text: "Flexible plans and custom solutions for sellers' needs" },
  { image: bg2, text: "Think Big, Start Small, Scale Fast" },
  { image: bg3, text: "Built on trust and dedication" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFadeClass('fade-in');
      }, 1000); // matches fade-out duration
    }, 7000); // stay on slide for 7s, then transition

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section
      className={`hero ${fadeClass}`}
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>{currentSlide.text}</h1>
      </div>
    </section>
  );
}
