import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Base URL for Google Books API (search term can be customized)
  const url = "https://www.googleapis.com/books/v1/volumes?q=react";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(url);
        setBooks(response.data.items || []);
      } catch (error) {
        console.error("Fetching failed", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

    if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <p className="text-lg text-gray-400 animate-pulse">Loading books...</p>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 py-8 px-4 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Bookshelf
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
          >
            {book.volumeInfo.imageLinks?.thumbnail ? (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="w-32 h-48 object-cover rounded mb-4"
              />
            ) : (
              <div className="w-32 h-48 bg-gray-200 flex items-center justify-center mb-4 rounded">
                <span className="text-gray-500 text-sm">No Image</span>
              </div>
            )}
            <h3 className="font-semibold text-center text-lg mb-2">
              {book.volumeInfo.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
            </p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
 </> 
 );
}

export default Books;
