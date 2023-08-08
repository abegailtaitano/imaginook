const API_KEY = 'AIzaSyBHuOVNAR2D6ZejkFVrD4oBE8MDr0j4QHI'; // Replace with your Google API Key

export async function searchBooks(query) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
  );
  const data = await response.json();
  return data.items;
}

export async function retrieveBookDetails(bookId) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}
