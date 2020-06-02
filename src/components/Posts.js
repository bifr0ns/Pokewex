import React, { useState } from "react";
import PokemonInfo from "./PokemonInfo";

const Posts = ({ posts, loading, allPokemon }) => {
    const [pokemon, setPokemon] = useState([]);
    const [mostrar, setMostrar] = useState(false);

    function infoPokemon(pokemon) {
        setPokemon(pokemon);
        showModal(true);
    }

    const showModal = (show) => setMostrar(show);

    const changePokemon = (newPokemon) => {
        setPokemon(newPokemon);
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (loading) {
        return (
            <div>
                <img
                    id="loading"
                    src="/images/loading.gif"
                    height="100px"
                ></img>
            </div>
        );
    }

    return (
        <div className="pokegallery">
            {mostrar && (
                <PokemonInfo
                    pokemon={pokemon}
                    mostrar={mostrar}
                    showModal={showModal}
                    somePokemon={allPokemon}
                    changePokemon={changePokemon}
                />
            )}
            {posts
                .sort((a, b) => a.id - b.id)
                .map((pokemon, i) => (
                    <div id={pokemon.id} key={pokemon.id}>
                        <div
                            className="cardPokemon"
                            onClick={() => infoPokemon(pokemon)}
                        >
                            <img
                                src={pokemon.sprites.front_default}
                                alt="pokemon"
                            />
                            <div>
                                <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
                                <h4>Type: {pokemon.types[0].type.name}</h4>
                                <h4>Weight: {pokemon.weight}</h4>
                                <h4>
                                    Abilities:
                                    {pokemon.abilities.map((abilities, i) => (
                                        <div
                                            id={pokemon.name + i}
                                            key={pokemon.name + i}
                                        >
                                            <div>
                                                <h5>
                                                    {abilities.ability.name}
                                                </h5>
                                            </div>
                                        </div>
                                    ))}
                                </h4>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Posts;
