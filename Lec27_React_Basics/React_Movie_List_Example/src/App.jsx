import { useState } from 'react'
import './App.css'
import Movie from './Movie.jsx'

const movieData = [
  {
    Title: "Inception",
    Year: "2010",
    Poster: "https://example.com/inception.jpg"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Poster: "https://example.com/interstellar.jpg"
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Poster: "https://example.com/dark-knight.jpg"
  }
]

function App() {
  const movieList = movieData;  
  
  return (
    <div>
      {/* Looping */}
      {movieList.map((movie, index) => (
        <Movie  title={movie.Title} year={movie.Year} key={index} />
      ))}
    </div>
  )
}

export default App
