import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import Menu from "./Menu";

const Pokedex = () => {
    const arr = [];
    const [pokeUrl, setPokeUrl] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        async function getNumbersPokemon() {
            let numberOfPokemon = await (
                await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1`)
            ).json();
            setPokeUrl(
                `https://pokeapi.co/api/v2/pokemon/?limit=${numberOfPokemon.count}`
            );
        }

        try {
            getNumbersPokemon();
        } catch (error) {
            console.log(error);
        }
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

        try {
            getPokemons();
        } catch (error) {
            console.log("Error while trying to bring pokemon", error);
            setPosts("error");
            setLoading(false);
        }
    }, [pokeUrl]);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Change pokemon per page
    const setNumberOfPokemonByPage = () => {
        setPostsPerPage(selectPage.value);
    };

    //Change language of descriptions
    const setLanguageDescriptions = () => {
        setLanguage(selectLanguage.value);
    };

    return (
        <div className="app">
            <Menu
                pokemonByPage={setNumberOfPokemonByPage}
                language={setLanguageDescriptions}
            />
            <Posts
                posts={currentPosts}
                loading={loading}
                allPokemon={posts}
                language={language}
            />
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
