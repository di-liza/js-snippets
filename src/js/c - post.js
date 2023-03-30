const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'CSS',
  author: 'Me',
  genres: ['style.css'],
  rating: 7,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  fetch('http://localhost:3000/books', options)
    .then(res => res.json())
    .then(console.log);
}

addBook({
  title: 'Pathon',
  author: 'Me',
  genres: ['piton'],
  rating: 9.5,
});
