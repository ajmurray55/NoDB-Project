import React from "react";
import "../../App.css";

function MovieInfo(props) {
  const { id, title, Poster, youtube, rating } = props.movie;

  return (
    <div className="movieInformation">
      <h2 className="MovieTitle">{title}</h2>
      <img src={Poster} alt="movieposter" />
      <div className="V_D_Buttons">
        <div className="ViewButton">
          <button id="vbutton" onClick={props.toggle}>
            View
          </button>
        </div>
        <div className="DeleteButton">
          <button id="dbutton" onClick={() => props.delete(id)}>
            Delete
          </button>
        </div>
      </div>
      {youtube}
      <h4 className="rating">{rating}</h4>
    </div>
  );
}

export default MovieInfo;
