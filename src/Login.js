import React, { useState } from 'react';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!username.trim() || !password.trim()) {
            alert('Please enter both username and password.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {username, password})
            });
            const status = response.status;
            const responseData = await response.json();
            console.log('responseData', responseData);
            if (status === 200) {
                localStorage.setItem('userId', responseData.id);
                setIsLoggedIn(true);
            } else if (status === 401) {
                alert('Incorrect password');
            } else {
                alert('No account yet. Please register');
            }
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    }

    return (
        <div className="w3-content w3-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
