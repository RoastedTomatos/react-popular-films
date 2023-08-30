import React from 'react';

interface FilmCardProps {
  title: string;
  poster_path: string;
  key: number; // 'key' is a reserved prop name and should not be used as a prop name
}

export const FilmCard: React.FC<FilmCardProps> = ({
  title,
  poster_path,
  key
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
    </div>
  );
}
