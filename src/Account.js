import React from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
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
            const response = await fetch('http://localhost:8080/account', {
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
            if (status === 200) {
                navigate('/home');
            } else {
                alert('Incorrect credentials');
            }
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    }

    return (
        <div className="w3-content w3-container">
            <h2>Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="firstName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="lastName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="address1">Address Line 1</label>
                    <input type="text" id="address1" name="address1" required />
                </div>
                <div className="form-group">
                    <label htmlFor="address2">Address Line 2</label>
                    <input type="text" id="address2" name="address2" required />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" required />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" required />
                </div>
                <div className="form-group">
                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="text" id="zip-code" name="zipCode" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="tel" id="phone-number" name="phoneNumber" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <input className="btn btn-primary" type="submit" value="Submit"/>
                <input className="btn btn-secondary" type="reset" value="Reset"/>
            </form>
        </div>
    );
}

export default Account;
