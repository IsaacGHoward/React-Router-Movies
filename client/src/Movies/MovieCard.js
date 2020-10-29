import React from 'react';

export default function MovieCard (props) {
  return(
    <div className="movie-card">
      <h2>{props.movie.title}</h2>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      {
        props.movie.stars && 
        <>
          <h3>Actors</h3>
          {props.movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </>
      }
    </div>
  );
}
