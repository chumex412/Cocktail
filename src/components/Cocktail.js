import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({
  id, 
  drink, 
  alcoholic, 
  glass, 
  img
}) => {

  return (
    <li>
      <div className="card">
        <div className="card-img-top">
          <img src={img} alt={drink} loading="lazy" />
        </div>
        <div className="card-body">
          <h3>{drink}</h3>
          <h4>{glass}</h4>
          <p>{alcoholic}</p>
          <Link to={`/cocktail/${id}`} className="btn">details</Link>
        </div>
      </div>
    </li>
  )
};

export default Cocktail;