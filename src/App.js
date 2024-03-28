import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Registration from './Registration';
import Account from './Account';
import Login from './Login';
import Logout from './Logout';
import Footer from './Footer';

const App = () => {
    // State to track user login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Sidebar isLoggedIn={isLoggedIn} />
            <Home isLoggedIn={isLoggedIn} />
            <Routes>
                {/* Registration page */}
                {!isLoggedIn && <Route path="/registration" element={<Registration />} />}

                {/* Login page */}
                {!isLoggedIn && <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />}

                {/* Account page */}
                {isLoggedIn && <Route path="/account" element={<Account />} />}

                {/* Logout */}
                {isLoggedIn && <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />}
            </Routes>
            <Footer isLoggedIn={isLoggedIn} />
        </Router>
    );

};

export default App;