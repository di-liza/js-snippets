export default function searchPhotoes() {
  const BASE_URL = 'https://api.nasa.gov/';
  const API_KEY = '0RTDSihAMnFR2FmIGkK5m9d4LCQByQKMTtKfzxkr';
  const PATH = 'mars-photos/api/v1/rovers/curiosity/photos';

  return fetch(`${BASE_URL}${PATH}?sol=50&page=2&api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    },
  );
}
