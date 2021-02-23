import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ Category }) => {
  const { data: images, loading } = useFetchGifs(Category);

  return (
    <>
      <h3 className="title">{Category}</h3>
      <div className="card-grid">
        {loading && (
          <p className=" animate__animated animate__flash">Cargando...</p>
        )}
        {images &&
          images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
      </div>
    </>
  );
};
