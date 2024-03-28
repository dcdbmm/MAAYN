const Logout = ({ setIsLoggedIn }) => {
    const handleLogout = () => {
        // Your logout logic here
        setIsLoggedIn(false);
    };

    return (
        <div className="w3-content w3-container">
            <h2>Logout</h2>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
