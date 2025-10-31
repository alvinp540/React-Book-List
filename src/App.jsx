import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const BookShelf = React.lazy(() => import("./components/Books"));


function App() {
  return (
    <Router>
      <Suspense >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;