import './app.css'
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./components/Books";
const BookShelf = React.lazy(() => import("./components/Books"));
const Home = React.lazy(() => import("./components/Home"));



function App() {
  return (
    <Router>
      <Suspense >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Books" element={<Books />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;