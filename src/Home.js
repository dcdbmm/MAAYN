import logo from './logo.png';

const Home = () => {
    return (
        <div className="w3-padding-32 w3-center w3-container w3-content">
            <img alt="Website Picture" src={logo} style={{width: '90%'}} />
            <p>
                <h3>Welcome to my website! MAAYN stands for Music And All You Need.
                    I am still building this website, so the name could change.
                    And I will add more details as time goes on. Thank you!</h3>
            </p>
        </div>
    );
}
export default Home;
