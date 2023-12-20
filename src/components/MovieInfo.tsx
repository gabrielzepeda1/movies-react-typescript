import React from "react";
import { BiCameraMovie, BiTv } from "react-icons/bi";

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
      <div className="row justify-content-between">
        {data.map(({ Title, Year, Type, Poster }, i) => {
          return (
            <div key={i} className="col-4 my-2">
              <div
                style={{ height: "100%", maxHeight: "750px" }}
                className="card text-white bg-dark mb-3 m-2"
              >
                <img 
                  style={{height: "80%"}}
                  className="card-img-top" 
                  src={Poster} 
                  alt={Title} />
                <div className="card-body d-flex flex-column justify-content-center">
                  <div className="card-title lead text-uppercase h4 fs-6">
                    {Title}
                  </div>
                  <p className="card-text fs-6 text-success h5">
                    Released on: {Year}
                  </p>
                  <p className="card-text text-warning align-items-center d-flex justify-content-center">
                    {Type === "movie" ? <BiCameraMovie /> : <BiTv />}
                    <span className="mx-1 text-info text-capitalize fs-6">
                      {Type}
                    </span>
                  </p>
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
