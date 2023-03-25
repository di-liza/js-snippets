const BASE_URL = 'https://api.nasa.gov/';
const API_KEY = '0RTDSihAMnFR2FmIGkK5m9d4LCQByQKMTtKfzxkr';
const PATH = 'mars-photos/api/v1/rovers/curiosity/photos';

export default class FetchNasaApi {
  constructor() {
    this.page = 1;
  }

  fetchApi() {
    console.log(this);
    return fetch(
      `${BASE_URL}${PATH}?sol=50&page=${this.page}&api_key=${API_KEY}`,
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      this.increasePage();
      return response.json();
    });
  }
  increasePage() {
    this.page += 1;
  }
}
