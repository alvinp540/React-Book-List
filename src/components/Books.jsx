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

  return (
    <>
      <Navbar />
     
      <Footer />
    </>
  );
}

export default Books;
