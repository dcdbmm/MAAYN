import React from 'react';
const Registration = () => {
    return (
        <div className="w3-content w3-container">
            <h2>Registration</h2>
            <form>
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