import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import History from "./pages/History";

import { load, save } from "./utils/storage";

function App() {
  const [books, setBooks] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setBooks(load("books"));
    setHistory(load("history"));
  }, []);

  useEffect(() => {
    save("books", books);
    save("history", history);
  }, [books, history]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} setBooks={setBooks} />} />
        <Route path="/add" element={<AddBook books={books} setBooks={setBooks} />} />
        <Route path="/edit/:id" element={<EditBook books={books} setBooks={setBooks} />} />
        <Route path="/book/:id" element={<BookDetails books={books} setBooks={setBooks} history={history} setHistory={setHistory} />} />
        <Route path="/history" element={<History history={history} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;