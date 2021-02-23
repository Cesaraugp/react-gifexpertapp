import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Hello"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      <ul>
        {categorias.map((el) => (
          <GifGrid Category={el} key={el} />
        ))}
      </ul>
    </>
  );
};
