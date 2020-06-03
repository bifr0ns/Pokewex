import React from "react";

const Menu = ({ pokemonByPage, language }) => {
    return (
        <div className="menuPokemon">
            Pokemon by page:
            <select
                id="selectPage"
                className="selectpicker"
                onChange={() => pokemonByPage()}
            >
                <option>10</option>
                <option selected>20</option>
                <option>30</option>
                <option>50</option>
                <option>100</option>
            </select>
            Language of descriptions:
            <select
                id="selectLanguage"
                className="selectpicker"
                onChange={() => language()}
            >
                <option value="en" selected>
                    English
                </option>
                <option value="es">Español</option>
            </select>
        </div>
    );
};

export default Menu;
