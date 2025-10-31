import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
  <>
   <Navbar/>
   <div className="w-screen h-screen flex flex-col items-center justify-center px-5 py-10
    ">
     
      <h1 className="text-4xl font-bold text-blue-600 mb-3">
     Google Books Explorer
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Discover books from around the world using the Google Books API.
      </p>
       <Link
          to="/books"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          Explore Now
        </Link>
  
</div>
       <Footer/>
  </> 
  );  
}

export default Home;
