const API_KEY = 'uFSamMk7MO4-S8kgNfGcHfP1uTkR0kOzbRDjUe1qc9Q';
const BASE_URL = 'https://api.unsplash.com/search/photos';

const fetchImages = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}?query=${query}&page=${page}&client_id=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  const data = await response.json();
  return data;
};

export default fetchImages;
