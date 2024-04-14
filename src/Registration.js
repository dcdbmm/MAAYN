import React from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Retrieve form data from the event object
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const status = response.status;
            const responseJson = await response.json();
            console.log('responseJson', responseJson);
            if (status === 201) {
                navigate('/login');
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    };
    return (
        <div className="w3-content w3-container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input className="form-control" type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>

                <input className="btn btn-primary" type="submit" value="Submit" />
                <input className="btn btn-secondary" type="reset" value="Reset" />
            </form>
        </div>
    );
}
export default Registration;