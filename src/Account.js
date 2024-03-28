import React from 'react';
const Account = () => {
    return (
        <div className="w3-content w3-container">
            <h2>Account</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" required />
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
                    <input type="text" id="zip-code" name="zip-code" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="tel" id="phone-number" name="phone-number" required />
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
