import './style.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faDiagramProject, faAddressCard, faAddressBook, faBrain } from '@fortawesome/free-solid-svg-icons';
import { useNavigate , useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(`${location.pathname}`);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const links = [
    {
      icon: faAddressCard,
      url: '/',
    }, 
    {
      icon: faBrain,
      url: '/skills',
    },
    {
      icon: faDiagramProject,
      url: '/my-project',
    },
    {
      icon: faAddressBook,
      url: '/contact',
    },
  ];

  const toggleNavList = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleNavigation = (url: string) => {
    setActiveLink(url); // Set the active link when clicked
    navigate(url);
  };

  return (
    <div className='navigation'>
      <div className="navBar" onClick={toggleNavList}>
        <div className='iconBar'>
          <FontAwesomeIcon icon={isNavVisible ? faXmark : faBars} />
        </div>
      </div>
      <div className={`navList ${isNavVisible ? 'visible' : ''}`}>
        {links.map((link, index) => (
          <div className={`iconList ${activeLink === link.url ? 'active' : ''}`} // Apply active class if this link is the active one
            key={index}
            onClick={() => handleNavigation(link.url)}>
            <FontAwesomeIcon icon={link.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
