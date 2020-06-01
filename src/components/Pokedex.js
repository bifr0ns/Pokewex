import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";

const Pokedex = () => {
    const arr = [];
    const [pokeUrl, setPokeUrl] = useState(null);

    /*pagination*/
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    useEffect(() => {
        async function getNumbersPokemon() {
            let numberOfPokemon = await (
                await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1`)
            ).json();
            setPokeUrl(`https://pokeapi.co/api/v2/pokemon/?limit=${numberOfPokemon.count}`);
        }

        getNumbersPokemon();
    }, []);

    useEffect(() => {
        setLoading(true);
        async function getPokemons() {
            let pokeList = await (await fetch(pokeUrl)).json();
            await Promise.all(
                pokeList.results.map(async (pokemon) => {
                    arr.push(await (await fetch(pokemon.url)).json());
                })
            );
            setPosts(arr);
            setLoading(false);
        }

        getPokemons();
    }, [pokeUrl]);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="app">
            <Posts posts={currentPosts} loading={loading} allPokemon={posts} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Pokedex;
