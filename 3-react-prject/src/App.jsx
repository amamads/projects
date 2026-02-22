import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';

import searchIcon from './search.svg';
const API_URL = 'https://www.omdbapi.com/?apikey=c032e2d7'
function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([])

    async function searchMovies(title) {
        const res = await fetch(`${API_URL}&s=${title}`)
        console.log(res);
        if (!res.ok) throw new Error('can not find movies')
        const data = await res.json();
        console.log(data);
        console.log(data.Response === 'False'?false:true);
        if (data.Response !== 'False'?false:true) {
            console.log('excuted');
            return setMovies([]);
        }
        console.log('object');
        const uniqueMovies = data.Search.reduce((total, curr) => {
            if (!total.some(m => m.imdbID === curr.imdbID)) total.push(curr)
            return total

        }, [])

        setMovies(uniqueMovies)
        console.log(movies);
    }
    useEffect(e => {
        searchMovies('Batman');
    }, [])

    return (

        <div className='app'>
            <h1>Movie land</h1>

            <div className='search'>
                <input
                    type="text"
                    value={searchTerm ? searchTerm : ''}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder='Search for Movies'
                />
                <img
                    src={searchIcon}
                    alt="serach"
                    onClick={e => searchMovies(searchTerm)}
                />
                {console.log(searchTerm)}
            </div>

            {console.log(movies)}
            {movies.length > 0 ? (
                movies.map(movie => MovieCard(movie))
            ) : (
                <h1>Movie not found!</h1>
            )}


        </div>
    );
}

export default App;
