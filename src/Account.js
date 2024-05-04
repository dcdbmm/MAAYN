import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        email: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [originalUserData, setOriginalUserData] = useState(null);

    useEffect(() => {
        // Fetch user account details when component mounts
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const userId = localStorage.getItem('userId');
        try {
            const response = await fetch(`http://localhost:8080/account?userId=${userId}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            if (response.status === 200) {
                const userData = await response.json();
                setUserData(userData);
                setOriginalUserData(userData);
                setEditMode(true);
            } else if (response.status === 204) {
                console.log('No data found for the user');
            } else {
                throw new Error('Failed to fetch user data');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userId = localStorage.getItem('userId');

        try {
            const response = await fetch('http://localhost:8080/account', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...userData, userId })
            });
            const status = response.status;
            const responseJson = await response.json();
            console.log('responseJson', responseJson);
            if (status === 201) {
                navigate('/login');
            } else {
                alert('Incorrect credentials');
            }
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        const userId = localStorage.getItem('userId');

        try {
            const response = await fetch('http://localhost:8080/account', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...userData, userId })
            });
            const status = response.status;
            const responseJson = await response.json();
            console.log('responseJson', responseJson);
            if (status === 200) {
                console.log('Account details updated successfully');
                handleSubmit(event);
            } else if (status === 404) {
                console.error('No existing record found for user');
            } else {
                throw new Error('Failed to update account details');
            }
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    };

    const handleReset = () => {
        if (editMode) {
            setUserData(originalUserData);
        } else {
            setUserData({
                firstName: '',
                lastName: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zipCode: '',
                phoneNumber: '',
                email: ''
            });
        }
    };

    return (
        <div className="w3-content w3-container">
            <h2>Account</h2>
            <form onSubmit={editMode ? handleUpdate : handleSubmit}>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="firstName" value={userData.firstName}
                           onChange={(e) => setUserData({...userData, firstName: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="lastName" value={userData.lastName}
                           onChange={(e) => setUserData({...userData, lastName: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="address1">Address Line 1</label>
                    <input type="text" id="address1" name="address1" value={userData.address1}
                           onChange={(e) => setUserData({...userData, address1: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="address2">Address Line 2</label>
                    <input type="text" id="address2" name="address2" value={userData.address2}
                           onChange={(e) => setUserData({...userData, address2: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" value={userData.city}
                           onChange={(e) => setUserData({...userData, city: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" value={userData.state}
                           onChange={(e) => setUserData({...userData, state: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="text" id="zip-code" name="zipCode" value={userData.zipCode}
                           onChange={(e) => setUserData({...userData, zipCode: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="tel" id="phone-number" name="phoneNumber" value={userData.phoneNumber}
                           onChange={(e) => setUserData({...userData, phoneNumber: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={userData.email}
                           onChange={(e) => setUserData({...userData, email: e.target.value})} required/>
                </div>
                {editMode ? null : <input className="btn btn-primary" type="submit" value="Submit"/>}
                {editMode ? <input className="btn btn-primary" type="submit" value="Update"/> : null}
                <button className="btn btn-secondary" type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
}

export default Account;
