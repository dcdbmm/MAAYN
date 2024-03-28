import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isLoggedIn }) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const w3_close = () => {
        setSidebarOpen(false);
    };

    const w3_open = () => {
        setSidebarOpen(true);
    };

    return (
        <React.Fragment>
            <nav className={`w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left ${sidebarOpen ? 'w3-show' : ''}`}
                 style={{ display: sidebarOpen ? 'block' : 'none', zIndex: 2, width: '40%', minWidth: 300 }} id="mySidebar">
                <a href="javascript:void(0)" onClick={w3_close} className="w3-bar-item w3-button">Close Menu</a>
                <Link to="/home" onClick={w3_close} className="w3-bar-item w3-button">Home</Link>
                {!isLoggedIn && <Link to="/registration" onClick={w3_close} className="w3-bar-item w3-button">Registration</Link>}
                {!isLoggedIn && <Link to="/login" onClick={w3_close} className="w3-bar-item w3-button">Login</Link>}
                {isLoggedIn && <Link to="/account" onClick={w3_close} className="w3-bar-item w3-button">Account</Link>}
                {isLoggedIn && <Link to="/logout" onClick={w3_close} className="w3-bar-item w3-button">Logout</Link>}
            </nav>

            <div className="w3-top">
                <div className="w3-white w3-xlarge" style={{ maxWidth: 1200, margin: 'auto' }}>
                    <div className="w3-button w3-padding-16 w3-left" onClick={w3_open}>☰</div>
                    <div className="w3-center w3-padding-16"><h1>MAAYN</h1></div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sidebar;
