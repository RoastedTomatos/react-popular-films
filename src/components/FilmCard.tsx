import React from 'react'
import { Film } from '../types/types'
import { PosterImage, StyledCard, Title } from '../styles/StyledFilmsCard'

export const FilmCard: React.FC<Film> = ({
  title,
  poster_path,
  id,
}) => {
  return (
    <StyledCard>
      <PosterImage
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
      />
      <Title>{title}</Title>
    </StyledCard>
  )
}
