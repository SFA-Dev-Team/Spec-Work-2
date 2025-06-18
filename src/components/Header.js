import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null); // 'who', 'approach', 'about'
  const [openSubmenu, setOpenSubmenu] = useState(null); // 'company', 'acquisition'

  const whoRef = useRef(null);
  const approachRef = useRef(null);
  const aboutRef = useRef(null);

  const toggleDropdown = (key) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(prev => (prev === key ? null : key));
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (key) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSubmenu(prev => (prev === key ? null : key));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        whoRef.current && !whoRef.current.contains(event.target) &&
        approachRef.current && !approachRef.current.contains(event.target) &&
        aboutRef.current && !aboutRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <a href=''><img src="./ninth-street-capital.png" alt="Logo" /></a>
      </div>
      <nav className="nav">
        {/* Who We Are */}
        <div className="dropdown" ref={whoRef}>
          <a href="/" onClick={toggleDropdown('who')} className={`dropbtn ${openDropdown === 'who' ? 'active' : ''}`}>
            Who we are
          </a>
          <div className={`dropdown-content ${openDropdown === 'who' ? 'show' : ''}`}>
            <div className="dropdown-submenu">
              <a href="/" onClick={toggleSubmenu('company')} className={`dropbtn-submenu ${openSubmenu === 'company' ? 'active' : ''}`}>
                Company Overview <span className="arrow">{openSubmenu === 'company' ? '▲' : '▼'}</span>
              </a>
              <div className={`dropdown-submenu-content ${openSubmenu === 'company' ? 'show-submenu' : ''}`}>
                <a href="/">Information for Owners</a>
                <a href="/">Information for Intermediaries</a>
              </div>
            </div>
            <a href="/" className="extra">Our Team</a>
            <a href="/" className="extra">Our Capital Providers</a>
          </div>
        </div>

        {/* Our Approach */}
        <div className="dropdown" ref={approachRef}>
          <a href="/" onClick={toggleDropdown('approach')} className={`dropbtn ${openDropdown === 'approach' ? 'active' : ''}`}>
            Our Approach
          </a>
          <div className={`dropdown-content ${openDropdown === 'approach' ? 'show' : ''}`}>
            <div className="dropdown-submenu">
              <a href="/" onClick={toggleSubmenu('acquisition')} className={`dropbtn-submenu ${openSubmenu === 'acquisition' ? 'active' : ''}`}>
                The Acquisition Process <span className="arrow">{openSubmenu === 'company' ? '▲' : '▼'}</span>
              </a>
              <div className={`dropdown-submenu-content ${openSubmenu === 'acquisition' ? 'show-submenu' : ''}`}>
                <a href="/">Investment Criteria</a>
              </div>
            </div>
            <a href="/" className="extra">Partnering with Management</a>
            <a href="/" className="extra">Long-Term Planning</a>
          </div>
        </div>

        {/* About Us */}
        <div className="dropdown" ref={aboutRef}>
          <a href="/" onClick={toggleDropdown('about')} className={`dropbtn ${openDropdown === 'about' ? 'active' : ''}`}>
            About Us
          </a>
          <div className={`dropdown-content ${openDropdown === 'about' ? 'show' : ''}`}>
            <a href="/" className="extra">Our Portfolio</a>
            <a href="/" className="extra">Press-Release</a>
            <a href="/" className="extra">Contact Us</a>
          </div>
        </div>

        <a href="/">Investor Login</a>
      </nav>
    </header>
  );
}
