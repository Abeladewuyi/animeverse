const BASE_URL = "https://api.jikan.moe/v4";

export const getTopAnime = async () => {
  const res = await fetch(`${BASE_URL}/top/anime?limit=20`);
  const data = await res.json();
  return data.data;
};

export const getAnimeById = async (id) => {
  const res = await fetch(`${BASE_URL}/anime/${id}`);
  const data = await res.json();
  return data.data;
};

export const searchAnime = async (query) => {
  const res = await fetch(`${BASE_URL}/anime?q=${query}&limit=10`);
  const data = await res.json();
  return data.data;
};

export const getAnimeEpisodes = async (id) => {
  const res = await fetch(`${BASE_URL}/anime/${id}/episodes`);
  const data = await res.json();
  return data.data;
};