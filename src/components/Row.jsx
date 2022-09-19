import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from '../axios.js';
import '../stylesheets/Row.css';

const baseURL = 'https://image.tmdb.org/t/p/original'

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trialerUrl, setTrailerUrl] = useState('');

    useEffect(function(){
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return
        }
        fetchData()

    }, [fetchURL])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay:1
        }
    }

    const handleClick = function(movie){
        if(trialerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || movie.title || '')
            .then(url => {
                const urlParams = new URLSearchParams (new URL(url).search)
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error))
        }
    }

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>
            {movies.map(movie => (
                <img 
                onClick={() => handleClick(movie)}
                key={movie.id}
                className={`row-poster ${isLargeRow && 'row-posterLarge'}`} 
                src={baseURL + (isLargeRow ? movie.poster_path: movie.backdrop_path)} 
                alt={movie.name}/>
            ))}
        </div>
        {trialerUrl && <YouTube videoId={trialerUrl} opts={opts}/>}
    </div> 
  )
}

export default Row

