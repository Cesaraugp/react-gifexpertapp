export const getGifs = async (Category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=PQo4rAW5ugOog2C4eKnoYpKUdbioT8kh&q=${encodeURI(
    Category
  )}&limit=7&offset=0&rating=g&lang=en`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.fixed_height_small.url,
    };
  });

  return gifs;
};
