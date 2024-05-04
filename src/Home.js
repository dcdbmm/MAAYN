import logo from './logo.png';

const Home = () => {
    return (
        <div className="w3-padding-32 w3-center w3-container w3-content">
            <img alt="Website Logo" src={logo} style={{width: '95%'}} />
            <div>
                <h4>
                    Welcome to MAAYN – Music And All You Need! For all who revel in melodies, lose themselves in books,
                    and occasionally contemplate wandering away, this is your sanctuary. MAAYN embodies the essence
                    of our passions, pronounced 'main' because, in the grand symphony of life, books, music,
                    and the allure of escapades are indeed our main and indispensable treasures.
                </h4>
            </div>
        </div>
    );
}
export default Home;
