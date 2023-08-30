import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { fetchPopularFilms } from '../redux/filmsSlice'

export const FilmsHolder: React.FC = () => {
  const dispatch = useDispatch()

  const popularFilms = useSelector(
    (state: RootState) => state.films.popularFilms
  )

  useEffect(() => {
    dispatch(fetchPopularFilms())
  }, [dispatch])

  console.log('Component rendered!')

  return (
    <div>
      <h2>Popular Films</h2>
      <ul>
        {popularFilms.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  )
}
