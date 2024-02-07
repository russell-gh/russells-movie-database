import React, { Component } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa6";

class Rating extends Component {
  render() {
    let { voteAverage, voteCount } = this.props;

    //convert to 5 from possible 10
    voteAverage = voteAverage / 2;

    console.log(Math.floor(voteAverage), new Array(Math.floor(voteAverage)));

    //create an array where its length matches the could of votes
    const count = [];
    for (let i = 0; i < voteAverage; i++) {
      count.push("");
    }

    return (
      <>
        <p>Total votes: {voteCount}</p>
        <p>Rating: {voteAverage} </p>
        {count.map((item, index) => {
          return (
            <span key={index} className="star">
              <FaRegStar />
            </span>
          );
        })}
        {voteAverage !== Math.round(voteAverage) && (
          <span className="star">
            <FaRegStarHalf />
          </span>
        )}
      </>
    );
  }
}

export default Rating;
