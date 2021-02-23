import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__jello">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
