import React from "react";
import { BiCameraMovie, BiTv } from "react-icons/bi";
import { MovieInfoProps } from "../customTypes";
const MovieInfo: React.FC<MovieInfoProps> = ({ data }) => {
  return (
    <div className="container">
      {data ? (
        <div className="row justify-content-between">
          {data.map(({ title, year, type, poster }, i) => {
            return (
              <div key={i} className="col-4 my-2">
                <div
                  style={{ height: "100%", maxHeight: "750px" }}
                  className="card text-white bg-dark mb-3 m-2"
                >
                  <img
                    style={{ height: "80%" }}
                    className="card-img-top"
                    src={poster}
                    alt={title}
                  />
                  <div className="card-body d-flex flex-column justify-content-center">
                    <div className="card-title lead text-uppercase h4 fs-6">
                      {title}
                    </div>
                    <p className="card-text fs-6 text-success h5">
                      Released on: {year}
                    </p>
                    <p className="card-text text-warning align-items-center d-flex justify-content-center">
                      {type === "movie" ? <BiCameraMovie /> : <BiTv />}
                      <span className="mx-1 text-info text-capitalize fs-6">
                        {type}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};
export default MovieInfo;