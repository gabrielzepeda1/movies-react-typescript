import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import { PiTelevisionSimple } from "react-icons/pi";

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
        {data.map((item, i) => {
          const { Title, Year, Type, Poster } = item
          const icon = Type === 'movie' ? <BiCameraMovie /> : <PiTelevisionSimple />
          return (
            <div key={i} className="col-4">
              <div className="card text-white bg-dark mb-3 m-2">
                <img
                  className="card-img-top"
                  src={Poster}
                  alt={Title}
                />
                <div className="card-body">
                  <div className="card-title lead text-uppercase mb-1">{Title}</div>
                  <p className="card-text mb-1">Released on: {Year}</p>
                  <p className="card-text">{icon} {Type}</p>
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
