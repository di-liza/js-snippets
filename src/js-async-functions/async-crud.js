const BASE_URL = 'http://localhost:3000';

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const response = await fetch('http://localhost:3000/books', options);
  const newBook = response.json();
  return newBook;
}

async function addBookAndUpdate() {
  try {
    const book = await addBook({
      title: 'Wonderfool Land',
      author: 'Anna Mari Seymur',
      genres: ['fantasy'],
      rating: 10,
    });
    console.log(book);
  } catch (error) {
    console.log('error:', error);
  }
}

// addBookAndUpdate();

async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  const books = await response.json();

  return books;
}

async function fetchBookById(bookId) {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  const book = await response.json();

  return book;
}

async function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(url, options);

  return response;
}

async function renderBook() {
  try {
    const book = await addBook({});
    console.log('Пришел ответ от бекенда можно рисовать');
    console.log(book);
  } catch (error) {
    console.log('error:', error);
  }
}
