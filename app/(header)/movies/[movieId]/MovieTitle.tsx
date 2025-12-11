'use client'
import type { Movie } from '@/serverActions/movie'

export default function MovieTitle({ movie }: { movie: Movie }) {
  return <h1 onClick={() => console.log(movie.Title)}>{movie.Title}</h1>
}
