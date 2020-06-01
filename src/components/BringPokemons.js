import React, { useState, useEffect } from "react";

function BringPokemon() {
    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [load, setLoad] = useState("true");
    const arr = [];
    return useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => response.json())
            .then((data) =>
                setResult(
                    data.results.map((item) => {
                        fetch(item.url)
                            .then((response) => response.json())
                            .then((allpokemon) => arr.push(allpokemon));
                        setPoke(arr);
                    })
                )
            );
    }, []);
    setTimeout(() => {
        setLoad(false);
    }, 1000);
}

export default BringPokemon;
