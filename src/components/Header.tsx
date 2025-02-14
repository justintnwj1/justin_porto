import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function App() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleToggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(0, 114, 255)', padding: '0px 24px', height: '64px' }}>
            <button className="navbar-toggler" type="button" onClick={handleToggleOffcanvas}>
                <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
            </button>
            <div className={`offcanvas offcanvas-start ${showOffcanvas ? 'show' : ''}`} tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ boxShadow: showOffcanvas ? '0px 0px 10px rgba(0,0, 0, 5)' : 'none' }}>
                <div className="offcanvas-header" style={{ backgroundColor: 'rgb(0, 114, 255)', padding: '0px 24px', height: '64px' }}>
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Justin Tanuwijaya</h5>
                    <button type="button" className="btn-close" style={{ filter: 'invert(1)' }} onClick={handleToggleOffcanvas} aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ">
                    <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                        <MenuItem key='About' component={Link} to='/' style={{ fontFamily: 'Futura' }}>About</MenuItem>
                        <MenuItem key='My Project' component={Link} to='/my-project' style={{ fontFamily: 'Futura' }}>My Project</MenuItem>
                        <MenuItem key='Contact' component={Link} to='/contact' style={{ fontFamily: 'Futura' }}>Contact </MenuItem>
                    </ul>
                </div>
            </div>
            <div className="portofolio" >Justin Tanuwijaya</div>
        </nav>
    );
}
