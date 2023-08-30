import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setPopularFilms } from '../redux/filmsSlice'

export const FilmsHolder: React.FC = () => {
  const dispatch = useDispatch()

  const popularFilms = useSelector(
    (state: RootState) => state.films.popularFilms
  )

  useEffect(() => {
    const mockPopularFilms = [
      { id: 1, title: 'Film 1' },
      { id: 2, title: 'Film 2' },
      { id: 3, title: 'Film 3' },
    ]

    console.log('Dispatching action...')
    dispatch(setPopularFilms(mockPopularFilms))
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
