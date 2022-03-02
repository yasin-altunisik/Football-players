import React from "react";
import "./PlayerCard.css";

function PlayerCard({ data }) {
  return (
    <div className="player">
      <img src={data.img} alt="playerPhoto" />
      <center>
        <p>Ad: {data.name}</p>
        <p>Yaş: {data.age}</p>
        <p>Mevki: {data.position}</p>
      </center>
    </div>
  );
}

export default PlayerCard;
