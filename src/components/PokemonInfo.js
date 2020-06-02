import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PokemonInfo = ({
    pokemon,
    mostrar,
    showModal,
    somePokemon,
    changePokemon,
}) => {
    const [pokemonDescription, setPokemonDescription] = useState();
    const [urlEvolution, setUrlEvolution] = useState();
    const [levelOne, setLevelOne] = useState(null);
    const [levelTwo, setLevelTwo] = useState(null);
    const [levelThree, setLevelThree] = useState(null);

    useEffect(() => {
        async function getDescriptionPokemon() {
            let pokemonSpecie = await (
                await fetch(
                    `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`
                )
            ).json();
            setUrlEvolution(pokemonSpecie.evolution_chain.url);
            await Promise.all(
                pokemonSpecie.flavor_text_entries.map(async (specie) => {
                    if (specie.language.name == "en") {
                        setPokemonDescription(specie.flavor_text);
                        return 0;
                    }
                })
            );
        }

        getDescriptionPokemon();
    }, [pokemon]);

    useEffect(() => {
        async function getEvolutionPokemon() {
            let evolutions = await (await fetch(urlEvolution)).json();
            let one = evolutions.chain.species.url.split(/[//]/)[6];
            let two = evolutions.chain.evolves_to[0]
                ? evolutions.chain.evolves_to[0].species.url.split(/[//]/)[6]
                : null;
            let three = evolutions.chain.evolves_to[0].evolves_to[0]
                ? evolutions.chain.evolves_to[0].evolves_to[0].species.url.split(
                      /[//]/
                  )[6]
                : null;
            somePokemon.map((newPokemon) => {
                if (newPokemon.id == one) setLevelOne(newPokemon);
                else if (newPokemon.id == two) setLevelTwo(newPokemon);
                else if (newPokemon.id == three) setLevelThree(newPokemon);
            });
        }

        getEvolutionPokemon();
    }, [urlEvolution]);

    function capitalizeFirstLetter(string) {
        if (string) return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Modal show={mostrar} onHide={() => showModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={pokemon.sprites.front_default} alt="pokemon" />
                <h3>
                    <strong>Type:</strong> {pokemon.types[0].type.name}
                </h3>
                <h3>
                    <strong>Weight:</strong> {pokemon.weight}
                </h3>
                <h3>
                    <strong>Abilities:</strong>
                    {pokemon.abilities.map((abilities, i) => (
                        <div id={pokemon.name + i} key={pokemon.name + i}>
                            <div>
                                <p>{abilities.ability.name}</p>
                            </div>
                        </div>
                    ))}
                </h3>
                <h3>
                    <em>{pokemonDescription}</em>
                </h3>
                {levelOne && (
                    <h3>
                        <strong>Evolutions:</strong>{" "}
                    </h3>
                )}
                <div>
                    {levelOne && (
                        <img
                            className="imgpokemon"
                            src={levelOne.sprites.front_default}
                            alt="pokemon"
                            onClick={() => changePokemon(levelOne)}
                        />
                    )}{" "}
                    {levelTwo && (
                        <img
                            className="imgpokemon"
                            src={levelTwo.sprites.front_default}
                            alt="pokemon"
                            onClick={() => changePokemon(levelTwo)}
                        />
                    )}{" "}
                    {levelThree && (
                        <img
                            className="imgpokemon"
                            src={levelThree.sprites.front_default}
                            alt="pokemon"
                            onClick={() => changePokemon(levelThree)}
                        />
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => showModal(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PokemonInfo;
