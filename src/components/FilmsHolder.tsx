import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchPopularFilms } from '../redux/filmsSlice';
import { FilmCard } from './FilmCard';
import { FilmsContainer } from '../styles/StyledFilmsHolder';

export const FilmsHolder: React.FC = () => {
  const dispatch = useDispatch();

  const popularFilms = useSelector(
    (state: RootState) => state.films.popularFilms
  );

  useEffect(() => {
    dispatch(fetchPopularFilms());
  }, [dispatch]);

  console.log('Component rendered!');

  return (
    <FilmsContainer>
        {popularFilms.map((film) => (
          <FilmCard
            title={film.title}
            poster_path={film.poster_path}
            id={film.id}
          />
        ))}
    </FilmsContainer>
  );
}
