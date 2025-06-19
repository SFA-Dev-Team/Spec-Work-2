import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-row">
          <div className="left-column">
            <div id="logo">
              <a href=''><img src="./ninth-street-capital.png" alt="Ninth Street Capital Partners Logo" /></a>
            </div>
            <div id="d3">
              <p>100 Park Avenue, Suite 215</p>
              <p>Orange Village, OH 44122</p>
              <p>Phone: 216-373-0925</p>
              <p>Fax: 216-223-6287</p>
            </div>
          </div>
          <div id="links">
            <p><a href=''>Who We Are</a></p>
            <p><a href=''>Our Approach</a></p>
            <p><a href=''>About Us</a></p>
            <p><a href=''>Investor Login</a></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Ninth Street Capital Partners (NSCP) works with business owners selling their business and financial intermediaries to structure deals that meet needs.<br />
          © 2025 Ninth Street Capital. All rights reserved.</p>
      </div>
    </footer>
  );
}
