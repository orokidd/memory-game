export async function fetchData(query = "cats", limit = 12) {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=fAikYqHyFIWlkJ9cVYRlpMabsqx32PIJ&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`,{ mode: "cors" });
  const data = await res.json();

  return data.data.map((item) => ({
    id: item.id,
    img: item.images.fixed_height.url,
    clicked: false,
  }));
}