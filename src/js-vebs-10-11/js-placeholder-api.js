export class JSONPlaceholderAPI {
  #BASE_URL = 'https://jsonplaceholder.typicode.com';
  page = 1;
  count = 10;
  async fetchPhotos() {
    const url = `${this.#BASE_URL}/posts?_limit=${this.count}_page=${
      this.page
    }`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    return await response.json();
  }

  incrementPage() {
    this.page += 1;
  }
}
