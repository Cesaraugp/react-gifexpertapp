import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (Category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(Category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 2000);
    });
  }, [Category]);

  return state;
};
