export class UnsplashAPI {
  #API_KEY = 'eDglOMKupJj9boWDs7oMM5yw96N9FZxUAnDhfoYp8_A';
  #BASE_URL = ' https://api.unsplash.com';

  query = null;
  page = 1;
  count = 12;

  basesearchParams = {
    client_id: this.#API_KEY,
    per_page: this.count,
    color: 'black_and_white',
    ...this.baseParams,
  };

  async fethPhoto() {
    const searchParams = new URLSearchParams({
      query: this.query,
      page: this.page,
      ...this.basesearchParams,
    });
    const response = await fetch(
      `${this.#BASE_URL}/search/photos?${searchParams}`,
    );
    if (!response.ok) {
      throw new Error(response.staus);
    }
    return await response.json();
  }

  incrementPage() {
    this.page += 1;
  }
}
