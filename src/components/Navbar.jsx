import React from "react"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        
           
            <nav className="bg-green-700 bg-opacity-70 shadow-md backdrop-blur-md sticky top-0 z-50">
              <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
            
                <Link
                  to="/"
                  className=" text-gray-200 hover:text-yellow-700 ">
                        <span className="text-2xl font-semibold">Bookshelf</span>
                </Link>
      
                <ul className="flex space-x-6 text-white font-medium">
                  <li>
                    <Link to="/" className="hover:text-yellow-700 text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/books"
                      className="hover:text-yellow-700 text-white "
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