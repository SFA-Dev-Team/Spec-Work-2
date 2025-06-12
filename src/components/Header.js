import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="./ninth-street-capital.png" alt="Ninth Street Capital Partners Logo" />
      </div>
      <nav className="nav">
        <a href="#">Who we are</a>
        <a href="#">Our Approach</a>
        <a href="#">About Us</a>
        <a href="#">Investor Login</a>
      </nav>
    </header>
  );
}
