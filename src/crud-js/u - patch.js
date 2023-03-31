const BASE_URL = 'http://localhost:3000';

function updateBookById(bookId, bookToUpdate) {
  const option = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookToUpdate),
  };
  return fetch(`${BASE_URL}/books/${bookId}`, option)
    .then(res => res.json())
    .then(console.log);
}

updateBookById(8, { title: 'CSS test book' });
