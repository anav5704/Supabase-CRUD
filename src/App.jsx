import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx"
import Update from "./pages/Update.jsx"


function App() {
  return (
    <BrowserRouter>
      <nav className="bg-teal-600 text-center w-screen p-5 text-white">  
        <h1 className="text-3xl font-bold  mb-5">Supa Smoothies</h1>
        <Link to="/"  className="px-5 py-2 mr-5 rounded-sm border border-white">Home</Link>
        <Link to="/create" className="px-5 py-2 rounded-md border border-white">New Smoothie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;