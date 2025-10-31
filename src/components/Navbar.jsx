import React from "react"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        
           
            <nav className="bg-purple-950 bg-opacity-70 shadow-md backdrop-blur-md sticky top-0 z-50">
              <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-white hover:text-yellow-300 transition">
                        <span className="text-2xl font-semibold">Bookshelf</span>
                </Link>
      
                <ul className="flex space-x-6 text-white font-medium">
                  <li>
                    <Link to="/" className="hover:text-yellow-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/books"
                      className="hover:text-yellow-300 border-b-2 border-yellow-300 pb-1"
                    >
                      Books
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

    )
}

export default Navbar