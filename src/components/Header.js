import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
    <header>
        <Navbar bg="danger" expand="xl">
            <div className="container">
                <NavLink
                    to="/pokedex"
                    activeClassName="logoHeader"
                    exact={true}
                >
                    <h1>Pokewex</h1>
                </NavLink>
            </div>
        </Navbar>
    </header>
);

export default Header;
