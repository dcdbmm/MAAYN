import React from 'react';
import spotify from './spotify_logo.png';
import youtube from './Youtube_logo.png';
import noah from './noah_kahan.png';
const Footer = () => {
    return (
        <footer className="w3-padding w3-light-grey">
            <div className="w3-third">
                <h3>FOOTER</h3>
                <p>Phone: 822-993-167 (Noah Kahan,Kacey Musgraves)
                    <a href="https://www.youtube.com/watch?v=xy2SPd3PQf4" target="blank">
                        <img alt="She calls me back youtube" src={noah} style={{ width: '50%' }} /></a></p>
                <p>My favorite music video of the year (and grammy winner for new artist of the year)
                    <a href="https://www.youtube.com/watch?v=KdJ-Qwu3y4Y" target="blank">
                        <img alt="On my mama youtube video" src={youtube} style={{ width: '10%' }} /></a></p>
                <p>See my spotify: <a href="https://open.spotify.com/?" target="_blank">
                    <img alt="Spotify Logo" src={spotify} style={{ width: '10%' }} /></a></p>
            </div>
        </footer>
    );
};

export default Footer;
