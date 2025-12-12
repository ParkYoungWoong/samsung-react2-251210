import { useEffect, useState } from 'react'

export interface Movie {
  imdbID: string
  Title: string
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch('https://omdbapi.com/?apikey=7035c60c&s=avengers')
      const { Search: movies } = await res.json()
      setMovies(movies)
    }
    fetchMovies()
  }, [])

  return (
    <>
      <h2>Movie List!</h2>
      <ul>
        {movies?.map(movie => (
          <div key={movie.imdbID}>{movie.Title}</div>
        ))}
      </ul>
    </>
  )
}
