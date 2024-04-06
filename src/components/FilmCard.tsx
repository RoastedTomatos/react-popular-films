import React from 'react';
import { Film } from '../types/types';
import {
  PosterImage,
  StyledCard,
  Title,
  Details,
} from '../styles/StyledFilmsCard';
import { IconHeartEmpty } from '../assets/svg';

export const FilmCard: React.FC<Film> = ({
  title,
  poster_path,
  id,
  release_date,
}) => {
  return (
    <StyledCard key={id}>
      <PosterImage
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
      />
      <Title>{title}</Title>
      <div>
        <Details>
          {release_date.slice(0, 4)}
          {}
        </Details>
        <IconHeartEmpty />
      </div>
    </StyledCard>
  );
};
