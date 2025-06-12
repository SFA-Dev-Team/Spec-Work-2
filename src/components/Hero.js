import './Hero.css';
import bg from '../assets/background.jpg';

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Think Big, Start Small, Scale Fast</h1>
      </div>
    </section>
  );
}
