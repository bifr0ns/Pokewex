import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="bottom">
            <footer className="mt-4">
                <Navbar bg="danger" expand="lg" className="">
                    <div className="containerApp">
                        <img id="pokedex2" src="/images/pokedex2.png"></img>
                        <img id="pokedex3" src="/images/pokedex3.png"></img>
                        <img id="pokedex4" src="/images/pokedex4.png"></img>
                        <img id="pokedex5" src="/images/pokedex5.png"></img>
                        <img id="pokedex1" src="/images/pokedex1.png"></img>
                    </div>
                </Navbar>
            </footer>
        </div>
    </div>
);

export default Footer;
