import React from "react";

export type MovieInfoProps = {
  data: DataChildren[];
};

export type DataChildren = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

const MovieInfo: React.FC<MovieInfoProps> = ({ data }) => {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        {data.map((elem, i) => {
          const {Poster, Year, Title} = elem
          return (
            <div className="col-4">
              <div className="card text-white bg-dark mb-3 m-2">
                <img
                  className="card-img-top"
                  key={i}
                  src={Poster}
                  alt={Title}
                />
                <div className="card-body">
                  <div className="card-title lead text-uppercase">{Title}</div>
                  <p className="card-text">Released on: {Year}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieInfo;
