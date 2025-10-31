import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

function Home() {
  return (
  <>
  <Navbar/>
   <div className="flex flex-col items-center justify-center h-[60vh] bg-blue-50 text-center px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-3">
     Google Books Explorer
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Discover books from around the world using the Google Books API.
      </p>
    </div>
<Footer/>
  </>
  );  
}

export default Home;
