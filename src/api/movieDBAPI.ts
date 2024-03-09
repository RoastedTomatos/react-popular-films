const API_KEY = '4f66593dc56df34fd5abd96e24279fca'
const BASE_URL = 'http://api.themoviedb.org/3'

export const fetchPopularFilms = async (page: number = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&per_page=100`
  )
  console.log(response)
  return response.json()
}