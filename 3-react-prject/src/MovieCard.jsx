import React from "react";

// function MovieCard({call: {imdbID,Year, Poster, Title, Type}}) {
//     return (
//         <div className='movie' key={imdbID}>
//             <div>
//                 <p>{Title}</p>
//             </div>
//             <div>
//                 <img src={Poster} alt={Title} />
//             </div>

//             <div>
//                 <span>{Type}</span>
//                 <h3>{Title}</h3>
//             </div>

//         </div>
//     )
// }
function MovieCard(movie) {
    return (
        // <div className='movie' key={movie.imdbID}>
        <div className='movie' key={movie.imdbID}>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    )
}
export default MovieCard;