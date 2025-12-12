export interface Movie {
  imdbID: string
  Title: string
}

export async function fetchMovies(
  title: string = 'avengers'
): Promise<Movie[]> {
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}`, {
    method: 'GET'
  })
  const { Search: movies } = await res.json()
  return movies as Movie[]
}
